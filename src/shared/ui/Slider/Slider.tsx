import cls from "./Slider.module.css";
import { useState } from "react";
import Button from "@shared/ui/Button/Button";

interface Props {
  images: string[];
}

const Slider = ({ images }: Props) => {
  const [currIndex, setCurrIndex] = useState(0);

  const prevIndex = () => {
    setCurrIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextIndex = () => {
    setCurrIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={cls.Slider}>
      <Button className={cls.Prev} onClick={prevIndex} theme="clear">
        &lt;
      </Button>
      <div className={cls.MySlides}>
        <img className={cls.Image} src={images[currIndex]} />
      </div>

      <Button className={cls.Next} onClick={nextIndex} theme="clear">
        &gt;
      </Button>
    </div>
  );
};

export default Slider;
