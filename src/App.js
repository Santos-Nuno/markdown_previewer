import "./App.css";
import React from "react";
import { marked } from "marked";

const defaultText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.
  
\`\`\`
// this is multi-line code:
  
function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}\`
\`\`\`
  
You can also make text **bold**... whoa!

Or _italic_.

Or... wait for it... **_both!_**

And feel free to go crazy ~~crossing stuff out~~.
  
There's also [links](https://www.freecodecamp.org), and
> Block Quotes!
  
And if you want to get really crazy, even tables:
  
Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.
  
- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.
  
1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:
  
![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`;



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: defaultText,
    };
  }

  updateMarkdown(markdown) {
    this.setState({ markdown });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row mt-4">
            <div className="col text-center">
              <h1>
                {" "}
                <span className="badge rounded-pill text-bg-dark">
                  Markdown Previewer
                </span>
              </h1>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col text-center">
              {" "}
              <div className="input-wrap">
                <h4>
                  <span className="badge rounded-pill text-bg-secondary">
                    Editor
                  </span>
                </h4>
                <textarea
                  id="editor"
                  className="input shadow"
                  placeholder=""
                  value={this.state.markdown}
                  onChange={(e) => {
                    this.updateMarkdown(e.target.value);
                  }}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col text-center">
              {" "}
              <div className="preview-wrap">
                <h4>
                  <span className="badge rounded-pill text-bg-secondary">
                    Previewer
                  </span>
                </h4>
                <div
                  id="preview"
                  className="preview shadow text-start"
                  dangerouslySetInnerHTML={{
                    __html: marked(this.state.markdown),
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
