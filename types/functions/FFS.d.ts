import Functions from "../extensionBase/Functions";


declare class FChat extends Functions {
    constructor(libName: string);
    constructor(libName: string, excludeLangauges: string[]);

    /**
     * Combine 2 paths
     */
    combine(patha: string, pathb: string): string;

    /**
     * Copy a file
     */
    copy(from: string, to: string): void;

    /**
     * Delete a file
     */
    delete(path: string): boolean;

    /**
     * Check if a file exists
     */
    exists(path: string): boolean;

    /**
     * Gets the directory part of a file path, or the parent directory of a folder 
     */
    getDir(path: string): string;

    /**
     * Get the last part (name) of a file
     */
    getName(path: string): string;

    /**
     * Check if a file is a directory
     */
    isDir(path: string): boolean;

    /**
     * List files in a path
     */
    list(path: string): string[];

    /**
     * Make a directory
     */
    makeDir(path: string): boolean;

    /**
     * Move a file
     */
    move(from: string, to: string): void;

    /**
     * Open a FileHandler for the file at the specified path
     */
    open(path: string): boolean;
}