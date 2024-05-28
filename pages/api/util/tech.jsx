export default async function Techs(req, res) {
    res.json([
        [ "JavaScript", "javascript.svg" ],
        [ "TypeScript", "typescript.png" ],
        [ "React", "react.svg" ],
        [ "Bootstrap", "bootstrap.svg" ],
        [ "CSS", "css.svg" ],
        [ "HTML", "html.svg" ],
        [ "Font Awesome", "fontawesome.png" ],
        [ "Git", "git.svg" ],
        [ "GitHub", "github.svg" ],
        [ "MongoDB", "mongo.svg" ],
        [ "Node.js", "node.svg" ],
        [ "TailwindCSS", "tailwind.svg" ],
    ]);
};