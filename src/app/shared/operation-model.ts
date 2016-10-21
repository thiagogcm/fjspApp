export interface OperationModel {
    // WTF these two param ????
    [key: number]: OperationModel;
    length: number;

    machineId: string;
    jobId: string;
    //tooltip: string;
    start: number;
    end: number;
}