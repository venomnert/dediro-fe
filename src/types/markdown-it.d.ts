declare module 'markdown-it' {
  class MarkdownIt {
    constructor(options?: any);
    render(content: string): string;
  }
  export default MarkdownIt;
}
