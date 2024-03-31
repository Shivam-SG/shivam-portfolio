import Service from "./Service.jsx";

const servicesData = [
  {
    icon: "/images/icon-design.svg",
    title: "Web design",
    description:
      "The most modern and high-quality design made at a professional level.",
  },
  {
    icon: "/images/icon-dev.svg",
    title: "Web development",
    description: "High-quality development of sites at the professional level.",
  },
  {
    icon: "/images/icon-app.svg",
    title: "Mobile apps",
    description:
      "Professional development of applications for iOS and Android.",
  },
  {
    icon: "/images/pen.png",
    title: "Sketch Artist",
    description:
      "I wield my pencil like a magic wand, turning blank pages into vibrant worlds of imagination.",
  },
];

const About = () => {
  return (
    <article className="about  active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          Hey there! I'm Shivam Gupta, a web wizard and graphic guru with a
          passion for all things digital. I've been tinkering with websites and
          doodling since forever, and I've turned that passion into a career
          blending web development and graphic design.
        </p>

        <p>
          When it comes to web development, I love bringing ideas to life with
          code that's as clean as my desk is messy. From making sure your site
          looks slick on any screen to diving into the backend to keep things
          running smoothly, I've got you covered.
        </p>

        <p>
          On the graphic design front, I'm all about making things pop. Logos,
          illustrations, branding—you name it, I'll make it look snazzy and
          memorable.
        </p>

        <p>
          But hey, it's not all work and no play! When I'm not glued to my
          screen, you'll find me exploring new creative rabbit holes or chilling
          with a good book (and maybe a cat or two).
        </p>

        <p>
          I'm all about collaboration and bringing your digital dreams to life.
          So let's grab a virtual coffee and chat about how we can create
          something awesome together!
        </p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>

        <ul className="service-list">
          {servicesData.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </ul>
      </section>
    </article>
  );
};

export default About;
