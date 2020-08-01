import React from 'react';

function ButtonLink(props) {
   // props =>{ className: "o que alguem passar", href: "/" }
   console.log(props);
    return (
       <nav>
           <a href={props.href} className={props.className}>
             Novo vídeo
          </a>
   

       </nav>
    );
}

export default ButtonLink;