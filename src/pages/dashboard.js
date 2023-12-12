import { useEffect } from 'react';
import { useState } from 'react';
import Markdown from 'react-markdown';

const markdown = '# Hi, *Pluto*!';

export function Dashboard() {
    const [content, setContent] = useState("");

    useEffect(() => {
        fetch("./changelog.md")
            .then((res) => res.text())
            .then((text) => setContent(text));
    }, []);

    return(
        <div>
            <Markdown
                className="markdown"
                children={content}
                components={{
                    h1(props) {
                        const {node, ...rest} = props
                        return <h1 class='text-3xl font-bold tracking-tight text-gray-900' {...rest}/>
                    },
                    h2(props) {
                        const {node, ...rest} = props
                        return <h2 class='text-2xl font-bold tracking-tight text-gray-900' {...rest}/>
                    },
                    h3(props) {
                        const {node, ...rest} = props
                        return <h3 class='text-xl font-bold tracking-tight text-gray-900' {...rest}/>
                    },
                    ul(props){
                        const{node, ...rest} = props
                        return <ul class='list-disc' {...rest}/>
                    }
                }}
            / >
        </div>
    )
}