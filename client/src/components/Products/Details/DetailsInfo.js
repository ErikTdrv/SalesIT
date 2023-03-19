import React from "react";
export function DetailsInfo({product}){
    return (
        <div className="info-div">
          { product.discount > 0 && (
          <div className="discount-div">
          <span>{product.discount}%</span>
          </div>
          )}
            {product?.manufacturer && <h1>{product.manufacturer}</h1>}
            {product?.phonename && <h1>{product.phonename}</h1>}
            <div className="characteristics">
              <div className="left">
                {product?.motherboard && (
                  <span>
                    <p>Motherboard:</p> {product.motherboard}
                  </span>
                )}
                {product?.processor && (
                  <span>
                    <p>Processor:</p> {product.processor}
                  </span>
                )}
                {product?.videocard && (
                  <span>
                    <p>Videocard:</p> {product.videocard}
                  </span>
                )}
                {product?.ssd && (
                  <span>
                    <p>SSD:</p> {product.ssd}
                  </span>
                )}
                {product?.os && (
                  <span>
                    <p>Operation System:</p> {product.os}
                  </span>
                )}
                {product?.harddrive && (
                  <span>
                    <p>Harddrive:</p> {product.harddrive}
                  </span>
                )}
                {product?.camera && (
                  <span>
                    <p>Camera:</p> {product.camera}
                  </span>
                )}
                {product?.color && (
                  <span>
                    <p>Color:</p> {product.color}
                  </span>
                )}
                {product?.capacity && (
                  <span>
                    <p>Capacity:</p> {product.capacity}
                  </span>
                )}
                {product?.displaysize && (
                  <span>
                    <p>Display Size:</p> {product.displaysize}
                  </span>
                )}
                {product?.Battery && (
                  <span>
                    <p>Videocard:</p> {product.Battery}
                  </span>
                )}
                {product?.screenresolution && (
                  <span>
                    <p>Screen Resolution:</p> {product.screenresolution}
                  </span>
                )}
                {product?.paneltype && (
                  <span>
                    <p>Panel Type:</p> {product.paneltype}
                  </span>
                )}
                {product?.resolution && (
                  <span>
                    <p>Resolution:</p> {product.resolution}
                  </span>
                )}
                {product?.refreshrate && (
                  <span>
                    <p>Refresh Rate:</p> {product.refreshrate}
                  </span>
                )}
                {product?.owner && (
                  <span>
                    <p>Owner:</p> {product.owner.username}
                  </span>
                )}
              </div>
            </div>
            <div className="price">
            { product.discount > 0 ? (
              <span>
                <p>Price: </p>
                <span className="old">{product.price}$</span>
                <span className="new">{product.price - (Number(product.discount)*0.01) * product.price}$</span> 
              </span>
            ) : (
              <span>
                <p>Price: </p>
                {product.price}$
              </span>
            )}
            </div>
          </div>
    )
}