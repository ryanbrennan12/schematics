import {
  Rule,
  SchematicContext,
  Tree,
  UpdateRecorder,
} from '@angular-devkit/schematics';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
import { RecorderOptions } from './schema';
export function updateRecorder(options: RecorderOptions): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const comment = '// ᕙ(⇀‸↼‶)ᕗ\n';

    const updateRecorder: UpdateRecorder = tree.beginUpdate(options.path);

    updateRecorder.insertLeft(0, comment);
    updateRecorder.insertLeft(0, comment);
    updateRecorder.insertLeft(0, comment);
    updateRecorder.insertLeft(0, comment);

    tree.commitUpdate(updateRecorder);

    return tree;
  };
}
