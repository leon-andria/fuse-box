import { File } from "../File";
import { WorkFlowContext } from "./../WorkflowContext";
import { Plugin } from "../WorkflowContext";
export declare class FuseBoxJSONPlugin implements Plugin {
    test: RegExp;
    init(context: WorkFlowContext): void;
    transform(file: File): void;
}
export declare const JSONPlugin: FuseBoxJSONPlugin;
