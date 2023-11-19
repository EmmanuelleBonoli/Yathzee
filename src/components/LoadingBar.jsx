import { motion, animate } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const LoadingBar = () => {
  const navigate = useNavigate();
  const [progressLoading, setProgressLoading] = useState(0);
  const progressTextRef = useRef(null);

  useEffect(() => {
    setProgressLoading(100);
    setTimeout(() => {
      navigate("/menu");
    }, 5000);
  }, [navigate]);

  useEffect(() => {
    if (progressTextRef.current != null) {
      animate(0, progressLoading, {
        duration: 4.0,
        onUpdate: (charge) => {
          if (progressTextRef.current != null) {
            progressTextRef.current.textContent = charge.toFixed(0);
          }
        },
      });
    }
  }, [progressLoading]);

  return (
    <div className="loadingBar">
      <div className="loadingBarContainer">
        <div className="levelLoadingBar">
          <motion.div
            className="bar"
            animate={{
              width: `${progressLoading}%`,
            }}
            transition={{
              duration: 4.0,
            }}
          />
        </div>
      </div>
      <div className="textLevelLoadingBar">
        <p ref={progressTextRef}>0</p>
        <p>%</p>
      </div>
    </div>
  );
};

export default LoadingBar;
