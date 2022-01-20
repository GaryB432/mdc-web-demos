import {
  formatFiles,
  generateFiles,
  installPackagesTask,
  joinPathFragments,
  names,
  readProjectConfiguration,
  readWorkspaceConfiguration,
  Tree
} from '@nrwl/devkit';
import { Schema } from './schema';

interface NormalizedOptions extends Schema {
  className: string;
  fileName: string;
  prefix: string;
  propertyName: string;
  tmpl: string;
}

function normalizeOptions(options: Schema): NormalizedOptions {
  const { propertyName, className, fileName: fn } = names(options.name);
  const fileName = options.type ? `${fn}.${options.type}` : fn;
  return {
    ...options,
    className,
    fileName,
    prefix: 'app',
    propertyName,
    tmpl: '',
  };
}

export default async function (tree: Tree, schema: Schema) {
  const options = normalizeOptions(schema);
  const { defaultProject, npmScope } = readWorkspaceConfiguration(tree);
  const { sourceRoot } = readProjectConfiguration(
    tree,
    schema.project || defaultProject
  );
  const { fileName: fn } = names(schema.name);

  generateFiles(
    tree,
    joinPathFragments(__dirname, './files'),
    schema.path ? joinPathFragments(sourceRoot, schema.path, fn) : sourceRoot,
    { ...options, prefix: npmScope }
  );
  if (options.skipTests) {
    tree.delete(
      joinPathFragments(
        schema.path
          ? joinPathFragments(sourceRoot, schema.path, fn)
          : sourceRoot,
        `${options.fileName}.spec.ts`
      )
    );
  }
  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}
