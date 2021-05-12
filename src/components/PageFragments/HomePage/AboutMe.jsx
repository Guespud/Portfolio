import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';

import SEO from '../../Seo';

const pageText = {
  paraOne: `¡Hola! Mi nombre es Alejandro Guespud Diaz. Soy un desarrollador web Front-End
  apasionado por diversas tecnologías web.  Tengo una experiencia de casi 2 años en el mundo tech , he trabajado en varios proyecto importantes en varios sectores.`,
  paraTwo: `Actualmente trabajo principalmente con tecnologías como <b>ReactJS</b>, <b>PHP</b> y <b>Wordpress</b>. también
  Tengo experiencia práctica trabajando con JAVA <b> Spring </b>. Siempre intento mejorar y adquirir mucho conocimiento nuevo y soy un programador autodidacta.
`,
};

const AboutMe = () => {
  const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)}`;
  return (
    <>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={['Alejandro', 'Guespud', 'Diaz', 'Front-End Developer', 'Javascript', 'ReactJS', 'PHP', 'JS']}
        />
        <h1 className="titleSeparate">Acerca de mí</h1>
        <p>
          {pageText.paraOne}
        </p>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
      </div>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="location.png"
            height={60}
            alt="location image"
            textH4="UBICACIÓN"
            textH3="Palmira, Valle del cauca, Co"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="coffee.png"
            alt="coffee image"
            textH4="100% Cafe"
            textH3="Cafe + Me = Rendimiento"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="meeting.png"
            alt="meeting image"
            textH4="Trabajo en equipo"
            textH3="Me encanta trabajar en grupo"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="motorcycle.png"
            alt="motorcycle image"
            textH4="Motero"
            textH3="Rodar es Vida"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="web.png"
            alt="web image"
            textH4="Constante aprendizaje"
            textH3="100% Cursos Web"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="graduation.png"
            alt="graduation image"
            textH4="T. Analisis Y Desarrollo de Software"
            textH3="Sena"
            height={60}
            width={60}
          />
        </Col>
      </Row>
    </>
  );
};
export default AboutMe;
