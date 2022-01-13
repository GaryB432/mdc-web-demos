import {
  names,
  Tree,
  formatFiles,
  installPackagesTask,
  generateFiles,
  joinPathFragments,
  readProjectConfiguration,
} from '@nrwl/devkit';

interface Schema {
  name: string;
  project: string;
}

export default async function (tree: Tree, schema: Schema) {
  const srcRoot = readProjectConfiguration(tree, schema.project).sourceRoot;
  const nms = names(schema.name);

  generateFiles(
    tree,
    joinPathFragments(__dirname, './files'),
    joinPathFragments(srcRoot, nms.fileName),
    { schema, ...nms, tmpl: '' }
  );
  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}
