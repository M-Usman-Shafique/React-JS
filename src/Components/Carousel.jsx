import React from "react";

export default function Carousel() {
  return (
    <div className="min-h-screen flex items-center">
      <div className="flex gap-5 w-72 overflow-x-scroll snap-x snap-mandatory">
        <div className="box-border px-8 py-5 flex-shrink-0 w-72 bg-gray-700 rounded-md text-center snap-center">
          <h2 className="text-2xl font-semibold">Card 1</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, cum
            nobis consequuntur praesentium voluptates modi ipsam accusamus ex
            harum repellendus, a quaerat sunt fugit deleniti laborum. Vel
            aliquam sint iure?
          </p>
        </div>
        <div className="box-border px-8 py-5 flex-shrink-0 w-72 bg-gray-700 rounded-md text-center snap-center">
          <h2 className="text-2xl font-semibold">Card 2</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, cum
            nobis consequuntur praesentium voluptates modi ipsam accusamus ex
            harum repellendus, a quaerat sunt fugit deleniti laborum. Vel
            aliquam sint iure?
          </p>
        </div>
        <div className="box-border px-8 py-5 flex-shrink-0 w-72 bg-gray-700 rounded-md text-center snap-center">
          <h2 className="text-2xl font-semibold">Card 3</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, cum
            nobis consequuntur praesentium voluptates modi ipsam accusamus ex
            harum repellendus, a quaerat sunt fugit deleniti laborum. Vel
            aliquam sint iure?
          </p>
        </div>
      </div>
    </div>
  );
}
