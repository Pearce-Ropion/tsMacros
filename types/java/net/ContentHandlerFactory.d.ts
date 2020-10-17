declare interface ContentHandlerFactory {
    createContentHandler(mimetype: string);
}

export default ContentHandlerFactory;
