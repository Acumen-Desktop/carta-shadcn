declare const lang: {
    displayName: string;
    name: "cartamd";
    patterns: {
        include: string;
    }[];
    repository: {
        $self: {};
        $base: {};
        ampersand: {
            match: string;
            name: string;
        };
        block: {
            patterns: {
                include: string;
            }[];
        };
        blockquote: {
            begin: string;
            captures: {
                '2': {
                    name: string;
                };
            };
            name: string;
            patterns: {
                include: string;
            }[];
            while: string;
        };
        bold: {
            begin: string;
            captures: {
                '1': {
                    name: string;
                };
            };
            end: string;
            name: string;
            patterns: ({
                applyEndPatternLast: true;
                begin: string;
                end: string;
                patterns: {
                    include: string;
                }[];
                include?: undefined;
            } | {
                include: string;
                applyEndPatternLast?: undefined;
                begin?: undefined;
                end?: undefined;
                patterns?: undefined;
            })[];
        };
        bracket: {
            match: string;
            name: string;
        };
        escape: {
            match: string;
            name: string;
        };
        fenced_code_block: {
            patterns: {
                include: string;
            }[];
        };
        fenced_code_block_basic: {
            begin: string;
            beginCaptures: {
                '3': {
                    name: string;
                };
                '4': {
                    name: string;
                };
                '5': {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                '3': {
                    name: string;
                };
            };
            name: string;
            patterns: {
                begin: string;
                contentName: string;
                patterns: {
                    include: string;
                }[];
                while: string;
            }[];
        };
        fenced_code_block_bibtex: {
            begin: string;
            beginCaptures: {
                '3': {
                    name: string;
                };
                '4': {
                    name: string;
                };
                '5': {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                '3': {
                    name: string;
                };
            };
            name: string;
            patterns: {
                begin: string;
                contentName: string;
                patterns: {
                    include: string;
                }[];
                while: string;
            }[];
        };
        fenced_code_block_c: {
            begin: string;
            beginCaptures: {
                '3': {
                    name: string;
                };
                '4': {
                    name: string;
                };
                '5': {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                '3': {
                    name: string;
                };
            };
            name: string;
            patterns: {
                begin: string;
                contentName: string;
                patterns: {
                    include: string;
                }[];
                while: string;
            }[];
        };
        fenced_code_block_clojure: {
            begin: string;
            beginCaptures: {
                '3': {
                    name: string;
                };
                '4': {
                    name: string;
                };
                '5': {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                '3': {
                    name: string;
                };
            };
            name: string;
            patterns: {
                begin: string;
                contentName: string;
                patterns: {
                    include: string;
                }[];
                while: string;
            }[];
        };
        fenced_code_block_coffee: {
            begin: string;
            beginCaptures: {
                '3': {
                    name: string;
                };
                '4': {
                    name: string;
                };
                '5': {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                '3': {
                    name: string;
                };
            };
            name: string;
            patterns: {
                begin: string;
                contentName: string;
                patterns: {
                    include: string;
                }[];
                while: string;
            }[];
        };
        fenced_code_block_cpp: {
            begin: string;
            beginCaptures: {
                '3': {
                    name: string;
                };
                '4': {
                    name: string;
                };
                '5': {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                '3': {
                    name: string;
                };
            };
            name: string;
            patterns: {
                begin: string;
                contentName: string;
                patterns: {
                    include: string;
                }[];
                while: string;
            }[];
        };
        fenced_code_block_csharp: {
            begin: string;
            beginCaptures: {
                '3': {
                    name: string;
                };
                '4': {
                    name: string;
                };
                '5': {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                '3': {
                    name: string;
                };
            };
            name: string;
            patterns: {
                begin: string;
                contentName: string;
                patterns: {
                    include: string;
                }[];
                while: string;
            }[];
        };
        fenced_code_block_css: {
            begin: string;
            beginCaptures: {
                '3': {
                    name: string;
                };
                '4': {
                    name: string;
                };
                '5': {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                '3': {
                    name: string;
                };
            };
            name: string;
            patterns: {
                begin: string;
                contentName: string;
                patterns: {
                    include: string;
                }[];
                while: string;
            }[];
        };
        fenced_code_block_dart: {
            begin: string;
            beginCaptures: {
                '3': {
                    name: string;
                };
                '4': {
                    name: string;
                };
                '5': {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                '3': {
                    name: string;
                };
            };
            name: string;
            patterns: {
                begin: string;
                contentName: string;
                patterns: {
                    include: string;
                }[];
                while: string;
            }[];
        };
        fenced_code_block_diff: {
            begin: string;
            beginCaptures: {
                '3': {
                    name: string;
                };
                '4': {
                    name: string;
                };
                '5': {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                '3': {
                    name: string;
                };
            };
            name: string;
            patterns: {
                begin: string;
                contentName: string;
                patterns: {
                    include: string;
                }[];
                while: string;
            }[];
        };
        fenced_code_block_dockerfile: {
            begin: string;
            beginCaptures: {
                '3': {
                    name: string;
                };
                '4': {
                    name: string;
                };
                '5': {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                '3': {
                    name: string;
                };
            };
            name: string;
            patterns: {
                begin: string;
                contentName: string;
                patterns: {
                    include: string;
                }[];
                while: string;
            }[];
        };
        fenced_code_block_dosbatch: {
            begin: string;
            beginCaptures: {
                '3': {
                    name: string;
                };
                '4': {
                    name: string;
                };
                '5': {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                '3': {
                    name: string;
                };
            };
            name: string;
            patterns: {
                begin: string;
                contentName: string;
                patterns: {
                    include: string;
                }[];
                while: string;
            }[];
        };
        fenced_code_block_elixir: {
            begin: string;
            beginCaptures: {
                '3': {
                    name: string;
                };
                '4': {
                    name: string;
                };
                '5': {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                '3': {
                    name: string;
                };
            };
            name: string;
            patterns: {
                begin: string;
                contentName: string;
                patterns: {
                    include: string;
                }[];
                while: string;
            }[];
        };
        fenced_code_block_erlang: {
            begin: string;
            beginCaptures: {
                '3': {
                    name: string;
                };
                '4': {
                    name: string;
                };
                '5': {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                '3': {
                    name: string;
                };
            };
            name: string;
            patterns: {
                begin: string;
                contentName: string;
                patterns: {
                    include: string;
                }[];
                while: string;
            }[];
        };
        fenced_code_block_fsharp: {
            begin: string;
            beginCaptures: {
                '3': {
                    name: string;
                };
                '4': {
                    name: string;
                };
                '5': {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                '3': {
                    name: string;
                };
            };
            name: string;
            patterns: {
                begin: string;
                contentName: string;
                patterns: {
                    include: string;
                }[];
                while: string;
            }[];
        };
        fenced_code_block_git_commit: {
            begin: string;
            beginCaptures: {
                '3': {
                    name: string;
                };
                '4': {
                    name: string;
                };
                '5': {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                '3': {
                    name: string;
                };
            };
            name: string;
            patterns: {
                begin: string;
                contentName: string;
                patterns: {
                    include: string;
                }[];
                while: string;
            }[];
        };
        fenced_code_block_git_rebase: {
            begin: string;
            beginCaptures: {
                '3': {
                    name: string;
                };
                '4': {
                    name: string;
                };
                '5': {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                '3': {
                    name: string;
                };
            };
            name: string;
            patterns: {
                begin: string;
                contentName: string;
                patterns: {
                    include: string;
                }[];
                while: string;
            }[];
        };
        fenced_code_block_go: {
            begin: string;
            beginCaptures: {
                '3': {
                    name: string;
                };
                '4': {
                    name: string;
                };
                '5': {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                '3': {
                    name: string;
                };
            };
            name: string;
            patterns: {
                begin: string;
                contentName: string;
                patterns: {
                    include: string;
                }[];
                while: string;
            }[];
        };
        fenced_code_block_groovy: {
            begin: string;
            beginCaptures: {
                '3': {
                    name: string;
                };
                '4': {
                    name: string;
                };
                '5': {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                '3': {
                    name: string;
                };
            };
            name: string;
            patterns: {
                begin: string;
                contentName: string;
                patterns: {
                    include: string;
                }[];
                while: string;
            }[];
        };
        fenced_code_block_handlebars: {
            begin: string;
            beginCaptures: {
                '3': {
                    name: string;
                };
                '4': {
                    name: string;
                };
                '5': {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                '3': {
                    name: string;
                };
            };
            name: string;
            patterns: {
                begin: string;
                contentName: string;
                patterns: {
                    include: string;
                }[];
                while: string;
            }[];
        };
        fenced_code_block_ini: {
            begin: string;
            beginCaptures: {
                '3': {
                    name: string;
                };
                '4': {
                    name: string;
                };
                '5': {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                '3': {
                    name: string;
                };
            };
            name: string;
            patterns: {
                begin: string;
                contentName: string;
                patterns: {
                    include: string;
                }[];
                while: string;
            }[];
        };
        fenced_code_block_java: {
            begin: string;
            beginCaptures: {
                '3': {
                    name: string;
                };
                '4': {
                    name: string;
                };
                '5': {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                '3': {
                    name: string;
                };
            };
            name: string;
            patterns: {
                begin: string;
                contentName: string;
                patterns: {
                    include: string;
                }[];
                while: string;
            }[];
        };
        fenced_code_block_js: {
            begin: string;
            beginCaptures: {
                '3': {
                    name: string;
                };
                '4': {
                    name: string;
                };
                '5': {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                '3': {
                    name: string;
                };
            };
            name: string;
            patterns: {
                begin: string;
                contentName: string;
                patterns: {
                    include: string;
                }[];
                while: string;
            }[];
        };
        fenced_code_block_js_regexp: {
            begin: string;
            beginCaptures: {
                '3': {
                    name: string;
                };
                '4': {
                    name: string;
                };
                '5': {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                '3': {
                    name: string;
                };
            };
            name: string;
            patterns: {
                begin: string;
                contentName: string;
                patterns: {
                    include: string;
                }[];
                while: string;
            }[];
        };
        fenced_code_block_json: {
            begin: string;
            beginCaptures: {
                '3': {
                    name: string;
                };
                '4': {
                    name: string;
                };
                '5': {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                '3': {
                    name: string;
                };
            };
            name: string;
            patterns: {
                begin: string;
                contentName: string;
                patterns: {
                    include: string;
                }[];
                while: string;
            }[];
        };
        fenced_code_block_jsonc: {
            begin: string;
            beginCaptures: {
                '3': {
                    name: string;
                };
                '4': {
                    name: string;
                };
                '5': {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                '3': {
                    name: string;
                };
            };
            name: string;
            patterns: {
                begin: string;
                contentName: string;
                patterns: {
                    include: string;
                }[];
                while: string;
            }[];
        };
        fenced_code_block_julia: {
            begin: string;
            beginCaptures: {
                '3': {
                    name: string;
                };
                '4': {
                    name: string;
                };
                '5': {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                '3': {
                    name: string;
                };
            };
            name: string;
            patterns: {
                begin: string;
                contentName: string;
                patterns: {
                    include: string;
                }[];
                while: string;
            }[];
        };
        fenced_code_block_latex: {
            begin: string;
            beginCaptures: {
                '3': {
                    name: string;
                };
                '4': {
                    name: string;
                };
                '5': {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                '3': {
                    name: string;
                };
            };
            name: string;
            patterns: {
                begin: string;
                contentName: string;
                patterns: {
                    include: string;
                }[];
                while: string;
            }[];
        };
        fenced_code_block_tex: {
            begin: string;
            beginCaptures: {
                '3': {
                    name: string;
                };
                '4': {
                    name: string;
                };
                '5': {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                '3': {
                    name: string;
                };
            };
            name: string;
            patterns: {
                begin: string;
                contentName: string;
                patterns: {
                    include: string;
                }[];
                while: string;
            }[];
        };
        fenced_code_block_less: {
            begin: string;
            beginCaptures: {
                '3': {
                    name: string;
                };
                '4': {
                    name: string;
                };
                '5': {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                '3': {
                    name: string;
                };
            };
            name: string;
            patterns: {
                begin: string;
                contentName: string;
                patterns: {
                    include: string;
                }[];
                while: string;
            }[];
        };
        fenced_code_block_log: {
            begin: string;
            beginCaptures: {
                '3': {
                    name: string;
                };
                '4': {
                    name: string;
                };
                '5': {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                '3': {
                    name: string;
                };
            };
            name: string;
            patterns: {
                begin: string;
                contentName: string;
                patterns: {
                    include: string;
                }[];
                while: string;
            }[];
        };
        fenced_code_block_lua: {
            begin: string;
            beginCaptures: {
                '3': {
                    name: string;
                };
                '4': {
                    name: string;
                };
                '5': {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                '3': {
                    name: string;
                };
            };
            name: string;
            patterns: {
                begin: string;
                contentName: string;
                patterns: {
                    include: string;
                }[];
                while: string;
            }[];
        };
        fenced_code_block_makefile: {
            begin: string;
            beginCaptures: {
                '3': {
                    name: string;
                };
                '4': {
                    name: string;
                };
                '5': {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                '3': {
                    name: string;
                };
            };
            name: string;
            patterns: {
                begin: string;
                contentName: string;
                patterns: {
                    include: string;
                }[];
                while: string;
            }[];
        };
        fenced_code_block_markdown: {
            begin: string;
            beginCaptures: {
                '3': {
                    name: string;
                };
                '4': {
                    name: string;
                };
                '5': {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                '3': {
                    name: string;
                };
            };
            name: string;
            patterns: {
                begin: string;
                contentName: string;
                patterns: {
                    include: string;
                }[];
                while: string;
            }[];
        };
        fenced_code_block_objc: {
            begin: string;
            beginCaptures: {
                '3': {
                    name: string;
                };
                '4': {
                    name: string;
                };
                '5': {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                '3': {
                    name: string;
                };
            };
            name: string;
            patterns: {
                begin: string;
                contentName: string;
                patterns: {
                    include: string;
                }[];
                while: string;
            }[];
        };
        fenced_code_block_perl: {
            begin: string;
            beginCaptures: {
                '3': {
                    name: string;
                };
                '4': {
                    name: string;
                };
                '5': {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                '3': {
                    name: string;
                };
            };
            name: string;
            patterns: {
                begin: string;
                contentName: string;
                patterns: {
                    include: string;
                }[];
                while: string;
            }[];
        };
        fenced_code_block_perl6: {
            begin: string;
            beginCaptures: {
                '3': {
                    name: string;
                };
                '4': {
                    name: string;
                };
                '5': {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                '3': {
                    name: string;
                };
            };
            name: string;
            patterns: {
                begin: string;
                contentName: string;
                patterns: {
                    include: string;
                }[];
                while: string;
            }[];
        };
        fenced_code_block_php: {
            begin: string;
            beginCaptures: {
                '3': {
                    name: string;
                };
                '4': {
                    name: string;
                };
                '5': {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                '3': {
                    name: string;
                };
            };
            name: string;
            patterns: {
                begin: string;
                contentName: string;
                patterns: {
                    include: string;
                }[];
                while: string;
            }[];
        };
        fenced_code_block_powershell: {
            begin: string;
            beginCaptures: {
                '3': {
                    name: string;
                };
                '4': {
                    name: string;
                };
                '5': {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                '3': {
                    name: string;
                };
            };
            name: string;
            patterns: {
                begin: string;
                contentName: string;
                patterns: {
                    include: string;
                }[];
                while: string;
            }[];
        };
        fenced_code_block_pug: {
            begin: string;
            beginCaptures: {
                '3': {
                    name: string;
                };
                '4': {
                    name: string;
                };
                '5': {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                '3': {
                    name: string;
                };
            };
            name: string;
            patterns: {
                begin: string;
                contentName: string;
                patterns: {
                    include: string;
                }[];
                while: string;
            }[];
        };
        fenced_code_block_python: {
            begin: string;
            beginCaptures: {
                '3': {
                    name: string;
                };
                '4': {
                    name: string;
                };
                '5': {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                '3': {
                    name: string;
                };
            };
            name: string;
            patterns: {
                begin: string;
                contentName: string;
                patterns: {
                    include: string;
                }[];
                while: string;
            }[];
        };
        fenced_code_block_r: {
            begin: string;
            beginCaptures: {
                '3': {
                    name: string;
                };
                '4': {
                    name: string;
                };
                '5': {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                '3': {
                    name: string;
                };
            };
            name: string;
            patterns: {
                begin: string;
                contentName: string;
                patterns: {
                    include: string;
                }[];
                while: string;
            }[];
        };
        fenced_code_block_regexp_python: {
            begin: string;
            beginCaptures: {
                '3': {
                    name: string;
                };
                '4': {
                    name: string;
                };
                '5': {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                '3': {
                    name: string;
                };
            };
            name: string;
            patterns: {
                begin: string;
                contentName: string;
                patterns: {
                    include: string;
                }[];
                while: string;
            }[];
        };
        fenced_code_block_ruby: {
            begin: string;
            beginCaptures: {
                '3': {
                    name: string;
                };
                '4': {
                    name: string;
                };
                '5': {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                '3': {
                    name: string;
                };
            };
            name: string;
            patterns: {
                begin: string;
                contentName: string;
                patterns: {
                    include: string;
                }[];
                while: string;
            }[];
        };
        fenced_code_block_rust: {
            begin: string;
            beginCaptures: {
                '3': {
                    name: string;
                };
                '4': {
                    name: string;
                };
                '5': {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                '3': {
                    name: string;
                };
            };
            name: string;
            patterns: {
                begin: string;
                contentName: string;
                patterns: {
                    include: string;
                }[];
                while: string;
            }[];
        };
        fenced_code_block_scala: {
            begin: string;
            beginCaptures: {
                '3': {
                    name: string;
                };
                '4': {
                    name: string;
                };
                '5': {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                '3': {
                    name: string;
                };
            };
            name: string;
            patterns: {
                begin: string;
                contentName: string;
                patterns: {
                    include: string;
                }[];
                while: string;
            }[];
        };
        fenced_code_block_scss: {
            begin: string;
            beginCaptures: {
                '3': {
                    name: string;
                };
                '4': {
                    name: string;
                };
                '5': {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                '3': {
                    name: string;
                };
            };
            name: string;
            patterns: {
                begin: string;
                contentName: string;
                patterns: {
                    include: string;
                }[];
                while: string;
            }[];
        };
        fenced_code_block_shell: {
            begin: string;
            beginCaptures: {
                '3': {
                    name: string;
                };
                '4': {
                    name: string;
                };
                '5': {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                '3': {
                    name: string;
                };
            };
            name: string;
            patterns: {
                begin: string;
                contentName: string;
                patterns: {
                    include: string;
                }[];
                while: string;
            }[];
        };
        fenced_code_block_sql: {
            begin: string;
            beginCaptures: {
                '3': {
                    name: string;
                };
                '4': {
                    name: string;
                };
                '5': {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                '3': {
                    name: string;
                };
            };
            name: string;
            patterns: {
                begin: string;
                contentName: string;
                patterns: {
                    include: string;
                }[];
                while: string;
            }[];
        };
        fenced_code_block_swift: {
            begin: string;
            beginCaptures: {
                '3': {
                    name: string;
                };
                '4': {
                    name: string;
                };
                '5': {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                '3': {
                    name: string;
                };
            };
            name: string;
            patterns: {
                begin: string;
                contentName: string;
                patterns: {
                    include: string;
                }[];
                while: string;
            }[];
        };
        fenced_code_block_ts: {
            begin: string;
            beginCaptures: {
                '3': {
                    name: string;
                };
                '4': {
                    name: string;
                };
                '5': {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                '3': {
                    name: string;
                };
            };
            name: string;
            patterns: {
                begin: string;
                contentName: string;
                patterns: {
                    include: string;
                }[];
                while: string;
            }[];
        };
        fenced_code_block_tsx: {
            begin: string;
            beginCaptures: {
                '3': {
                    name: string;
                };
                '4': {
                    name: string;
                };
                '5': {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                '3': {
                    name: string;
                };
            };
            name: string;
            patterns: {
                begin: string;
                contentName: string;
                patterns: {
                    include: string;
                }[];
                while: string;
            }[];
        };
        fenced_code_block_twig: {
            begin: string;
            beginCaptures: {
                '3': {
                    name: string;
                };
                '4': {
                    name: string;
                };
                '5': {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                '3': {
                    name: string;
                };
            };
            name: string;
            patterns: {
                begin: string;
                contentName: string;
                patterns: {
                    include: string;
                }[];
                while: string;
            }[];
        };
        fenced_code_block_unknown: {
            begin: string;
            beginCaptures: {
                '3': {
                    name: string;
                };
                '4': {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                '3': {
                    name: string;
                };
            };
            name: string;
        };
        fenced_code_block_vs_net: {
            begin: string;
            beginCaptures: {
                '3': {
                    name: string;
                };
                '4': {
                    name: string;
                };
                '5': {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                '3': {
                    name: string;
                };
            };
            name: string;
            patterns: {
                begin: string;
                contentName: string;
                patterns: {
                    include: string;
                }[];
                while: string;
            }[];
        };
        fenced_code_block_xml: {
            begin: string;
            beginCaptures: {
                '3': {
                    name: string;
                };
                '4': {
                    name: string;
                };
                '5': {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                '3': {
                    name: string;
                };
            };
            name: string;
            patterns: {
                begin: string;
                contentName: string;
                patterns: {
                    include: string;
                }[];
                while: string;
            }[];
        };
        fenced_code_block_xsl: {
            begin: string;
            beginCaptures: {
                '3': {
                    name: string;
                };
                '4': {
                    name: string;
                };
                '5': {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                '3': {
                    name: string;
                };
            };
            name: string;
            patterns: {
                begin: string;
                contentName: string;
                patterns: {
                    include: string;
                }[];
                while: string;
            }[];
        };
        fenced_code_block_yaml: {
            begin: string;
            beginCaptures: {
                '3': {
                    name: string;
                };
                '4': {
                    name: string;
                };
                '5': {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                '3': {
                    name: string;
                };
            };
            name: string;
            patterns: {
                begin: string;
                contentName: string;
                patterns: {
                    include: string;
                }[];
                while: string;
            }[];
        };
        frontMatter: {
            begin: string;
            contentName: string;
            end: string;
            patterns: {
                include: string;
            }[];
        };
        heading: {
            captures: {
                '1': {
                    patterns: {
                        captures: {
                            '1': {
                                name: string;
                            };
                            '2': {
                                name: string;
                                patterns: {
                                    include: string;
                                }[];
                            };
                            '3': {
                                name: string;
                            };
                        };
                        match: string;
                        name: string;
                    }[];
                };
            };
            match: string;
            name: string;
        };
        'heading-setext': {
            patterns: {
                match: string;
                name: string;
            }[];
        };
        html: {
            patterns: ({
                begin: string;
                captures: {
                    '1': {
                        name: string;
                    };
                    '2': {
                        name: string;
                    };
                };
                end: string;
                name: string;
                endCaptures?: undefined;
                patterns?: undefined;
                while?: undefined;
            } | {
                begin: string;
                end: string;
                endCaptures: {
                    '1': {
                        patterns: {
                            include: string;
                        }[];
                    };
                    '2': {
                        name: string;
                    };
                    '3': {
                        name: string;
                    };
                    '4': {
                        name: string;
                    };
                    '5': {
                        name: string;
                    };
                };
                patterns: {
                    begin: string;
                    patterns: {
                        include: string;
                    }[];
                    while: string;
                }[];
                captures?: undefined;
                name?: undefined;
                while?: undefined;
            } | {
                begin: string;
                patterns: {
                    include: string;
                }[];
                while: string;
                captures?: undefined;
                end?: undefined;
                name?: undefined;
                endCaptures?: undefined;
            })[];
        };
        'image-inline': {
            captures: {
                '1': {
                    name: string;
                };
                '2': {
                    name: string;
                };
                '4': {
                    name: string;
                };
                '5': {
                    name: string;
                };
                '7': {
                    name: string;
                };
                '8': {
                    name: string;
                };
                '9': {
                    name: string;
                };
                '10': {
                    name: string;
                };
                '12': {
                    name: string;
                };
                '13': {
                    name: string;
                };
                '14': {
                    name: string;
                };
                '15': {
                    name: string;
                };
                '16': {
                    name: string;
                };
                '17': {
                    name: string;
                };
                '18': {
                    name: string;
                };
                '19': {
                    name: string;
                };
                '20': {
                    name: string;
                };
                '21': {
                    name: string;
                };
            };
            match: string;
            name: string;
        };
        'image-ref': {
            captures: {
                '1': {
                    name: string;
                };
                '2': {
                    name: string;
                };
                '4': {
                    name: string;
                };
                '5': {
                    name: string;
                };
                '6': {
                    name: string;
                };
                '7': {
                    name: string;
                };
            };
            match: string;
            name: string;
        };
        inline: {
            patterns: {
                include: string;
            }[];
        };
        italic: {
            begin: string;
            captures: {
                '1': {
                    name: string;
                };
            };
            end: string;
            name: string;
            patterns: ({
                applyEndPatternLast: true;
                begin: string;
                end: string;
                patterns: {
                    include: string;
                }[];
                include?: undefined;
            } | {
                include: string;
                applyEndPatternLast?: undefined;
                begin?: undefined;
                end?: undefined;
                patterns?: undefined;
            })[];
        };
        'link-def': {
            captures: {
                '1': {
                    name: string;
                };
                '2': {
                    name: string;
                };
                '3': {
                    name: string;
                };
                '4': {
                    name: string;
                };
                '5': {
                    name: string;
                };
                '6': {
                    name: string;
                };
                '7': {
                    name: string;
                };
                '8': {
                    name: string;
                };
                '9': {
                    name: string;
                };
                '10': {
                    name: string;
                };
                '11': {
                    name: string;
                };
                '12': {
                    name: string;
                };
                '13': {
                    name: string;
                };
                '14': {
                    name: string;
                };
                '15': {
                    name: string;
                };
                '16': {
                    name: string;
                };
                '17': {
                    name: string;
                };
            };
            match: string;
            name: string;
        };
        'link-email': {
            captures: {
                '1': {
                    name: string;
                };
                '2': {
                    name: string;
                };
                '4': {
                    name: string;
                };
            };
            match: string;
            name: string;
        };
        'link-inet': {
            captures: {
                '1': {
                    name: string;
                };
                '2': {
                    name: string;
                };
                '3': {
                    name: string;
                };
            };
            match: string;
            name: string;
        };
        'link-inline': {
            captures: {
                '1': {
                    name: string;
                };
                '2': {
                    name: string;
                    patterns: {
                        include: string;
                    }[];
                };
                '4': {
                    name: string;
                };
                '5': {
                    name: string;
                };
                '7': {
                    name: string;
                };
                '8': {
                    name: string;
                };
                '9': {
                    name: string;
                };
                '10': {
                    name: string;
                };
                '12': {
                    name: string;
                };
                '13': {
                    name: string;
                };
                '14': {
                    name: string;
                };
                '15': {
                    name: string;
                };
                '16': {
                    name: string;
                };
                '17': {
                    name: string;
                };
                '18': {
                    name: string;
                };
                '19': {
                    name: string;
                };
                '20': {
                    name: string;
                };
                '21': {
                    name: string;
                };
            };
            match: string;
            name: string;
        };
        'link-ref': {
            captures: {
                '1': {
                    name: string;
                };
                '2': {
                    name: string;
                    patterns: {
                        include: string;
                    }[];
                };
                '4': {
                    name: string;
                };
                '5': {
                    name: string;
                };
                '6': {
                    name: string;
                };
                '7': {
                    name: string;
                };
            };
            match: string;
            name: string;
        };
        'link-ref-literal': {
            captures: {
                '1': {
                    name: string;
                };
                '2': {
                    name: string;
                };
                '4': {
                    name: string;
                };
                '5': {
                    name: string;
                };
                '6': {
                    name: string;
                };
            };
            match: string;
            name: string;
        };
        'link-ref-shortcut': {
            captures: {
                '1': {
                    name: string;
                };
                '2': {
                    name: string;
                };
                '3': {
                    name: string;
                };
            };
            match: string;
            name: string;
        };
        list_paragraph: {
            begin: string;
            name: string;
            patterns: {
                include: string;
            }[];
            while: string;
        };
        lists: {
            patterns: {
                begin: string;
                beginCaptures: {
                    '3': {
                        name: string;
                    };
                };
                name: string;
                patterns: {
                    include: string;
                }[];
                while: string;
            }[];
        };
        paragraph: {
            begin: string;
            name: string;
            patterns: {
                include: string;
            }[];
            while: string;
        };
        raw: {
            captures: {
                '1': {
                    name: string;
                };
                '3': {
                    name: string;
                };
            };
            match: string;
            name: string;
        };
        raw_block: {
            begin: string;
            name: string;
            while: string;
        };
        separator: {
            match: string;
            name: string;
        };
        strikethrough: {
            captures: {
                '1': {
                    name: string;
                };
                '2': {
                    patterns: ({
                        applyEndPatternLast: true;
                        begin: string;
                        end: string;
                        patterns: {
                            include: string;
                        }[];
                        include?: undefined;
                    } | {
                        include: string;
                        applyEndPatternLast?: undefined;
                        begin?: undefined;
                        end?: undefined;
                        patterns?: undefined;
                    })[];
                };
                '3': {
                    name: string;
                };
            };
            match: string;
            name: string;
        };
        table: {
            begin: string;
            beginCaptures: {
                '2': {
                    name: string;
                };
            };
            name: string;
            patterns: ({
                match: string;
                name: string;
                captures?: undefined;
            } | {
                captures: {
                    '1': {
                        name: string;
                        patterns?: undefined;
                    };
                };
                match: string;
                name?: undefined;
            } | {
                captures: {
                    '1': {
                        patterns: {
                            include: string;
                        }[];
                        name?: undefined;
                    };
                };
                match: string;
                name?: undefined;
            })[];
            while: string;
        };
    };
    scopeName: string;
    embeddedLangs: never[];
    embeddedLangsLazy: string[];
};
export default lang;
