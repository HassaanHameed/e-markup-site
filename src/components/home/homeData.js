import ImageBg from "../../assets/lamp2-min.jpg";
import BedImg from "../../assets/bed.jpg";
import ChairImg from "../../assets/chairs.jpg";
import ModernDesignBg from "../../assets/modern-desgin-background.jpg";
import LampImg from "../../assets/lamp5.jpg";
import GalleryImg from "../../assets/gallery.jpg";

export const homeContainerStyle = {
  // backgroundImage: `url(${ImageBg})`,
  // backgroundSize: "cover",
  // backgroundPosition: "center center",
  // backgroundRepeat: "no-repeat",
  background: `linear-gradient(to right, #b92b27, #1565c0)`,
  width: "100%",
  height: "100%",
  minHeight: "100vh",
  textAling: "center",
};

export const homeCategoryItems = [
  {
    id: "c1",
    name: "BEDSPREAD",
    img: BedImg,
  },
  {
    id: "c2",
    name: "GALLERY",
    img: GalleryImg,
  },
  {
    id: "c3",
    name: "CHAIR",
    img: ChairImg,
  },
  {
    id: "c4",
    name: "LAMP",
    img: LampImg,
  },
];
export const modernDesignStyles = {
  backgroundImage: `url(${ModernDesignBg})`,
  backgroundSize: "cover",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "400px",
  textTransform: "uppercase",
  color: "white",
};
