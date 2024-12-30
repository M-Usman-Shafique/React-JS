import React, { Suspense, useState, lazy } from "react";
const ProductDescription = lazy(() => import("./ProductDescription"));
const ProductReviews = lazy(() => import("./ProductReviews"));

export default function ProductPage() {
  const [selectedTab, setSelectedTab] = useState("");

  return (
    <div>
      <button onClick={() => setSelectedTab("description")}>Description</button>
      <button onClick={() => setSelectedTab("reviews")}>Reviews</button>
      <Suspense fallback={<div>Loading...</div>}>
        {selectedTab === "description" && <ProductDescription />}
        {selectedTab === "reviews" && <ProductReviews />}
      </Suspense>
    </div>
  );
}



// ​‌‍‌⁡⁣⁢⁣Router Based Lazy Loading:⁡​

// import React, { Suspense, lazy } from "react";
// import { Link, Route, Routes } from "react-router-dom";
// const ProductDescription = lazy(() => import("./ProductDescription"));
// const ProductReviews = lazy(() => import("./ProductReviews"));

// export default function ProductPage() {

//   return (
//     <div>
//       <Link to={"/description"}>Description</Link>
//       <Link to={"/reviews"}>Reviews</Link>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Routes>
//           <Route path="/description" element={<ProductDescription />} />
//           <Route path="/reviews" element={<ProductReviews />} />
//         </Routes>
//       </Suspense>
//     </div>
//   );
// }
