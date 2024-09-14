import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

// Function to calculate luminance and determine if the color is dark
const isDarkColor = (color) => {
  // Convert hex color to RGB
  const hex = color.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Calculate luminance
  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
  // Return true if the luminance is less than 128 (dark color), otherwise false
  return luminance < 128;
}

function BgColor() {
  const [bgColor, setBgColor] = useState("#000000"); // Default to black

  // const handleColor = (e) => {   // for input using colorpicker
  //   setBgColor(e.target.value);
  // };

  // const handleColor = () => {  // for toggle between black & white
  //   setBgColor((prevColor) => prevColor === 'black' ? 'white' : 'black')
  // }

  const handleColor = (color) => {
    setBgColor(color.hex);
  };

  return (
    <div style={{
      backgroundColor: bgColor,
      color: isDarkColor(bgColor) ? 'white' : 'black',
      height: "100vh",
      padding: "20px",
      transition: 'color 0.3s ease, background-color 0.3s ease'
    }}>
      {/* <input type="color" value={bgColor} onChange={handleColor}/> */}
      <SketchPicker color={bgColor} onChange={handleColor} />
      {/* <button onClick={() => handleColor("black")}>Dark</button> */}
      <p style={{ fontSize: 18}}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure aperiam nulla molestias distinctio iusto quaerat, deserunt illum ea qui, repellat dignissimos rerum explicabo, odit labore magni unde reiciendis nemo. Excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, dolores doloremque dolorem ab veritatis unde optio quos velit impedit. Architecto quos ipsa fugiat eveniet possimus? Eaque aut obcaecati sint neque?
        Possimus tenetur voluptas repudiandae assumenda nam culpa, sit dolore omnis nihil vero beatae, autem tempore ipsam. Similique commodi explicabo nemo impedit modi praesentium exercitationem vero repellat optio. Eaque, ab inventore.
        Quaerat molestias enim incidunt at blanditiis labore necessitatibus repellendus adipisci ipsum, dolorum laborum suscipit ab quisquam provident modi? Eveniet excepturi beatae doloribus quasi dolores molestiae odit facilis explicabo pariatur vero?
        Quidem iusto porro eaque debitis saepe facere in ea eos consectetur soluta, sed sunt alias ratione optio? Voluptas dolor beatae corrupti? Voluptates neque quod sequi. Sint exercitationem delectus veritatis a.
        Ut, cum nihil ex illo magni accusamus autem obcaecati dolorem modi similique tenetur eos veritatis eius, aut nesciunt pariatur officiis rerum beatae porro inventore. Nam corporis facilis quod magni voluptates.
        Aperiam, odio laborum! Maxime esse ea nihil tempora ullam dignissimos distinctio quod? Ad sapiente amet dicta accusamus quidem harum error numquam facere explicabo? Tenetur quo neque veniam, nesciunt laudantium necessitatibus.
        Ipsam labore eos sunt quos vel fugiat, laborum nemo aliquid, quam, at praesentium quibusdam deserunt sapiente accusamus temporibus inventore consequatur? Quibusdam quas nobis perspiciatis corporis harum id saepe eligendi voluptates.
        Eaque cum aliquam mollitia? Explicabo adipisci in error a facilis dolorem vitae est possimus corrupti consectetur ipsa nostrum blanditiis, dolor tenetur voluptas facere rem vero dolorum laudantium incidunt! Molestiae, atque.
        Doloribus, excepturi similique tenetur, ex facere minus est molestiae quam, saepe beatae rerum fuga ut suscipit dicta corporis ipsa odio ullam perspiciatis. Praesentium amet, impedit optio animi quia eligendi consequuntur!
        Dicta dolorem cupiditate iste eligendi illo et est velit nobis ad fugiat ipsum nisi modi molestias repellat officiis explicabo ab odio vero sint, saepe laborum culpa sit labore consectetur. Quisquam.
        Magnam eveniet optio sit a quos voluptatibus, porro quis sint nemo fugit, culpa dolorem voluptatum tenetur doloremque! Fugiat explicabo in, ex tempora eum dolores! Vitae omnis expedita perferendis harum incidunt!
        Ut facilis sequi nihil sapiente inventore quod! Adipisci ad ducimus ipsum explicabo quam, ea assumenda eaque ut minus deleniti aliquid quae reprehenderit exercitationem ullam, quos dolorem, alias temporibus nam fuga?
        Eligendi ullam tempore, consequatur fugiat assumenda repudiandae maxime neque sunt officia, deserunt omnis architecto ipsam itaque excepturi, vel reprehenderit obcaecati earum perspiciatis necessitatibus iure inventore! Magnam sequi saepe unde ab.
        Laboriosam, voluptates! Ipsam nulla quas suscipit esse corrupti beatae? Pariatur, obcaecati laboriosam velit veniam doloribus voluptates. Dolores ducimus id, quidem porro, hic eum amet dolor labore doloremque aperiam adipisci! Aut.
        Ex veritatis amet dolorum asperiores rerum. Sed corrupti deserunt laborum accusantium molestias eos veritatis odio nulla, eius quae sunt itaque alias saepe dolorem numquam rerum quasi a, maxime quas libero.
        Voluptas et quos nostrum aspernatur iure eius ea fugit libero qui accusamus architecto numquam commodi velit, iste voluptatem enim tempore accusantium hic eveniet atque vitae modi, dignissimos eum vero? Quidem?
        Aut incidunt est illum, aperiam animi reiciendis ducimus dolorum, labore reprehenderit, quae saepe laboriosam? Voluptas, ipsam corporis odit consectetur laborum rerum veritatis architecto neque at, tenetur, tempora incidunt nobis doloremque.
      </p>
    </div>
  );
}

export default BgColor;