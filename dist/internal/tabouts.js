/**
 * Default tab outs. Can be disabled in `Carta` by
 * passing the `disableDefaultTabOuts` option.
 */
export const defaultTabOuts = [
    {
        id: 'bold',
        delimiter: '**'
    },
    {
        id: 'italic',
        delimiter: ['*', '_']
    },
    {
        id: 'link',
        delimiter: ')'
    },
    {
        id: 'strikethrough',
        delimiter: '~~'
    },
    {
        id: 'inline-code',
        delimiter: '`'
    },
    {
        id: 'block-code',
        delimiter: '\n```'
    }
];
