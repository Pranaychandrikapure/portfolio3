// import loadjs from "loadjs";
import { useEffect } from 'react';


const Canvas = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "/fluid.js";  // Make sure this path is correct
        script.async = true;
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        };
      }, []);
    return (
        <div className="canv">
            <canvas ></canvas>
            {/* Add a minimal promo for testing */}
            <div className="promo">
                <div className="promo-middle">
                    <div className="promo-content">
                        <div className="promo-header">
                            <span className="promo-close">&times;</span>
                        </div>
                        <div className="promo-body">
    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Canvas;
