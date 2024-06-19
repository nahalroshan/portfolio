import React, { useState } from "react";
import Links from "./links/Links";
import { delay, motion, spring } from "framer-motion";
import Togglebutton from "./togglebutton/Togglebutton";
import "./sidebar.scss";
function Sidebar() {
    const [open,setOpen] = useState(false)
    const variants ={
        open:{clipPath : "circle(1200px at 50px 50px)",
            transition:{
                type:"spring",
                stiffness:20,
            }
        },

        closed:{
            clipPath:"circle(30px at 50px 50px)",
            transition :{
                delay:0.5,
                type:"spring",
                stiffness:500,
                damping:50
                
            }
        }
    }
  return (
    <motion.div className="sidebar" animate={open ? "open":"closed"}>
      hi
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <Togglebutton setOpen={setOpen} />
    </motion.div>
  );
}

export default Sidebar;
