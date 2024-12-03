const matchRegexs = {
    taskList: /^(\s*)(-\s+\[)[ xX]?(\]\s+)/,
    bulletedList: /^(\s*)([-*]\s+)/,
    numberedList: /^(\s*)(\d+)(\.\s+)/,
    blockquote: /^(\s*)([> ]*[>]\s+)/
};
export const defaultPrefixes = [
    {
        id: 'taskList',
        match: (line) => matchRegexs.taskList.exec(line),
        maker: (prev) => `${prev[1]}${prev[2]} ${prev[3]}`
    },
    {
        id: 'bulletedList',
        match: (line) => matchRegexs.bulletedList.exec(line),
        maker: (prev) => `${prev[1]}${prev[2]}`
    },
    {
        id: 'numberedList',
        match: (line) => matchRegexs.numberedList.exec(line),
        maker: (prev) => `${prev[1]}${Number(prev[2]) + 1}${prev[3]}`
    },
    {
        id: 'blockquote',
        match: (line) => matchRegexs.blockquote.exec(line),
        maker: (prev) => `${prev[1]}${prev[2]}`
    }
];
