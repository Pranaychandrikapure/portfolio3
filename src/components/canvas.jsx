import loadjs from "loadjs";


const Canvas = () => {
   loadjs("../src/fluid.js")
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
