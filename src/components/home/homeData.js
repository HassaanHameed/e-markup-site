import ModernDesignBg from "../../assets/smallpics/moderndesgin.jfif";
import BedImg from "../../assets/smallpics/bedspread.jfif";
import ChairImg from "../../assets/smallpics/chairs.jfif";
import GalleryImg from "../../assets/smallpics/gallery.jfif";
import LampImg from "../../assets/smallpics/lamp.jfif";

export const homeContainerStyle = {
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
};
