import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalState } from "../../Context/GlobalContext";
const ProductDetail = () => {

  const { id } = useParams();

  let arr = [
    {
      id: 1,
      sku: "pp5006301526",
      name: 'GE Café ™ 36" Built-In Touch Control Induction Cooktop With 5 Elements',
      description:
        'true This built-in cooktop’s five induction elements let you enjoy a new level of rapid, precise heating with a cool-to-the-touch surface that\'s easy to clean. Best of all, its GE Fits! Guarantee ensures an exact fit to make replacement easy. two 7" SyncBurners simultaneously heat large cookware or griddles 11" 3,700-watt induction element rapidly boils water with GE\'s most powerful induction element stainless steel clad aluminum griddle lets you achieve even results glide touch controls let you precisely control heat instantly and easily with one swipe control lock capability protects against unintended activation custom settings let you personalize your cooktop to fit your cooking style blue LED display with beveled edge grey glass surface lets you enjoy a premium look that blends in with modern kitchen finishes multi-element timer lets you manage up to 5 pans at once with individual timers for each element pan presence and size sensor let you cook efficiently with elements that heat to the size of your pan and shut off when no pan is present 4 5/8 x 36 x 20 3/8"',
      list_price: 2778.63,
      sale_price: 2500.65,
      category: "",
      average_product_rating: 4.6,
      image_url:
        "http://s7d9.scene7.com/is/image/JCPenney/DP1113201517080182M.tif?hei=380&amp;wid=380&op_usm=.4,.8,0,0&resmode=sharp2&op_usm=1.5,.8,0,0&resmode=sharp",
      brand: "GE",
      num_reviews: 19,
    },
    {
      id: 2,
      sku: "pp5004990861",
      name: "adidas® climacool® Crewneck T-Shirt",
      description:
        "This climacool crewneck tee is the ideal blend of performance and comfort, with a streamlined fit to complement your body's movement. climacool paneled zones for ventilation non-chafing stitching banded collar tag free polyester washable imported",
      list_price: 28.73,
      sale_price: 22.98,
      category: "underwear & socks",
      average_product_rating: 5,
      image_url:
        "http://s7d9.scene7.com/is/image/JCPenney/DP1214201517070042M.tif?hei=380&amp;wid=380&op_usm=.4,.8,0,0&resmode=sharp2&op_usm=1.5,.8,0,0&resmode=sharp",
      brand: "ADIDAS",
      num_reviews: 3,
    },
    {
      id: 3,
      sku: "pp5005630198",
      name: "Nike® Dri-FIT Rivalry Jacket",
      description:
        "Breathable, full-zip basketball jacket from Nike offers lightweight warmth while keeping you nice and dry, thanks to mesh Dri-FIT panels on the arms and body.",
      list_price: 70.62,
      sale_price: 52.96,
      category: "",
      average_product_rating: 5,
      image_url:
        "http://s7d9.scene7.com/is/image/JCPenney/DP0929201505323078C.tif?hei=380&amp;wid=380&op_usm=.4,.8,0,0&resmode=sharp2&op_usm=1.5,.8,0,0&resmode=sharp",
      brand: "Nike",
      num_reviews: 2,
    },
    {
      id: 4,
      sku: "pp5006510943",
      name: "Liz Claiborne® Wide-Leg Linen-Blend Pants - Petite",
      description:
        'Be ready for whatever the day brings you in our relaxed wide-leg linen-blend pants. 23" inseam elastic/drawstring waist 4-pocket styling linen/cotton machine wash, line dry imported',
      list_price: 52.36,
      sale_price: 26.18,
      category: "pants",
      average_product_rating: 4.5,
      image_url:
        "http://s7d9.scene7.com/is/image/JCPenney/DP0128201617062485M.tif?hei=380&amp;wid=380&op_usm=.4,.8,0,0&resmode=sharp2&op_usm=1.5,.8,0,0&resmode=sharp",
      brand: "LIZ CLAIBORNE",
      num_reviews: 2,
    },
    {
      id: 5,
      sku: "pp5006790242",
      name: "Alfred Dunner® Feels Like Spring Capris",
      description:
        'Pull on a pair of our casual capris and be footloose and fancy-free. flat front straight leg high rise back elastic side pockets 16 7/8-19" inseam cotton/polyester/spandex washable imported',
      list_price: 58.01,
      sale_price: 34.81,
      category: "view all",
      average_product_rating: 4.6,
      image_url:
        "http://s7d9.scene7.com/is/image/JCPenney/DP0226201617031154M.tif?hei=380&amp;wid=380&op_usm=.4,.8,0,0&resmode=sharp2&op_usm=1.5,.8,0,0&resmode=sharp",
      brand: "Alfred Dunner",
      num_reviews: 5,
    },
    {
      id: 6,
      sku: "pp5004070589",
      name: "Liz Claiborne® Essential Original-Fit Straight-Leg Jeans",
      description:
        'Fashioned from flexible stretch denim, our original-fit jeans sit above your waist, with tapered legs that visually lengthen your vertical silhouette.   zip fly with button closure 5-pocket styling 31½" inseam cotton/spandex washable imported',
      list_price: 57.03,
      sale_price: 33.25,
      category: "view all",
      average_product_rating: 4.5,
      image_url:
        "http://s7d9.scene7.com/is/image/JCPenney/DP0612201417170726M.tif?hei=380&amp;wid=380&op_usm=.4,.8,0,0&resmode=sharp2&op_usm=1.5,.8,0,0&resmode=sharp",
      brand: "LIZ CLAIBORNE",
      num_reviews: 82,
    },
    {
      id: 7,
      sku: "pp5004050433",
      name: "Stafford® Travel Endurance Pleated Pants–Big & Tall",
      description:
        "These pleated Stafford pants go the distance with a no-iron finish that lasts and lasts.   endurance no-iron finish superior wrinkle recovery permanent crease classic fit sits at waist expandable waist zip fly with button and hook-and-eye closure double pleats straight leg hemmed polyester washable imported  ",
      list_price: 108.78,
      sale_price: 54.38,
      category: "for men",
      average_product_rating: 4.8,
      image_url:
        "http://s7d9.scene7.com/is/image/JCPenney/DP0609201417083135M.tif?hei=380&amp;wid=380&op_usm=.4,.8,0,0&resmode=sharp2&op_usm=1.5,.8,0,0&resmode=sharp",
      brand: "STAFFORD",
      num_reviews: 12,
    },
    {
      id: 8,
      sku: "pp5005141413",
      name: "Lee® Kassidy Comfort Fit Straight-Leg Twill Pants",
      description:
        'Super-soft stretch twill and a super-comfortable hidden stretch waistband will make you want to wear our Comfort Fit straight-leg pants from Lee seven days a week.   sits just below waist hidden Comfort Fit stretch waistband moves with you straight leg with 17½" opening flat front button-and-zip fly front slant pockets back flap pockets black, sahara, nantucket, relic herringbone, black arrow tweed: cotton/spandex charcoal heather: cotton/polyester/spandex indigo rinse: cotton/polyester/spandex denim washable imported misses: 32" inseam petite: 29" inseam',
      list_price: 58.18,
      sale_price: 38.39,
      category: "pants",
      average_product_rating: 4.1,
      image_url:
        "http://s7d9.scene7.com/is/image/JCPenney/DP0811201417463846M.tif?hei=380&amp;wid=380&op_usm=.4,.8,0,0&resmode=sharp2&op_usm=1.5,.8,0,0&resmode=sharp",
      brand: "LEE",
      num_reviews: 19,
    },
    {
      id: 9,
      sku: "pp5007310136",
      name: "Stylus™ Flare Jeans",
      description:
        'Add a little retro to your wardrobe to create fashion fun with our Stylus flare jeans. high rise flare leg 5-pockets 32" inseam cotton/polyester/rayon/spandex washable imported  ',
      list_price: 60.43,
      sale_price: 21.14,
      category: "women's jeans",
      average_product_rating: 5,
      image_url:
        "http://s7d9.scene7.com/is/image/JCPenney/DP1202201517023245M.tif?hei=380&amp;wid=380&op_usm=.4,.8,0,0&resmode=sharp2&op_usm=1.5,.8,0,0&resmode=sharp",
      brand: "STYLUS",
      num_reviews: 2,
    },
    {
      id: 10,
      sku: "pp5006081510",
      name: "Xersion™ Print-Waist Capri Yoga Pants - Girls 7-16 and Plus",
      description:
        "The printed waist on these stretchy yoga capris adds girly flair to any workout wardrobe. printed waist capri length cotton/spandex washable imported",
      list_price: 20.95,
      sale_price: 10.46,
      category: "pants & leggings",
      average_product_rating: 4.9,
      image_url:
        "http://s7d9.scene7.com/is/image/JCPenney/DP0914201517022141M.tif?hei=380&amp;wid=380&op_usm=.4,.8,0,0&resmode=sharp2&op_usm=1.5,.8,0,0&resmode=sharp",
      brand: "Xersion",
      num_reviews: 10,
    },
  ];

  console.log(id);

  let detailedProduct = arr.find((item) => item.id == id);
  console.log(detailedProduct);

  return (
    <>
      <div className="card mb-3" style={{ maxWidth: 540 }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={detailedProduct.image_url}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{detailedProduct.name}</h5>
              <p className="card-text">{detailedProduct.description}</p>
              <p className="card-text">
                <small className="text-body-secondary">
                  {detailedProduct.brand}
                </small>
              </p>
              <h1 className="text-body-secondary">
                {detailedProduct.category}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
