import { useState } from "react";
import { motion } from "framer-motion";
import "./Maindash.css";

const MainDash = () => {
  const [X, setX] = useState(0);
  const list = { hidden: { opacity: 10 } };
  const item = { hidden: { x: -10, opacity: 10 } };
  return (
    <div className="m-0">
      <motion.div
        className="box"
        animation={{ X }}
        transition={{ type: "spring" }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
      />
      <input
        value={X}
        type="range"
        min={100}
        max={200}
        onChange={(e) => setX(parseFloat(e.target.value))}
      />
      <motion.ul animate="hidden" variants={list}>
        <motion.li variants={item} />
        <motion.li variants={item} />
        <motion.li variants={item} />
      </motion.ul>
    </div>
  );
};

export default MainDash;
