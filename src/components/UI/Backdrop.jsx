import { motion } from "framer-motion";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTransform } from "../../app/Slicers/themes";

const Backdrop = ({ children, onClick }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTransform(true));

    return () => dispatch(setTransform(false));
  }, []);

  return (
    <motion.div
      onClick={onClick}
      className="fixed top-0 left-0 h-full w-full bg-[#0000009a] flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
