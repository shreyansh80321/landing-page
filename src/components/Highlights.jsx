import React from "react";

export default function Highlights() {
  return (
    <section className="bg-white py-16">
      <div className="container">
        <div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
         
        >
          <h2
           
            className="text-2xl font-semibold mb-6"
          >
            Why VyomGarud?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
             
              className="p-6 bg-gray-50 rounded-lg"
            >
              High reliability
            </div>

            <div
              
              className="p-6 bg-gray-50 rounded-lg"
            >
              Modular payloads
            </div>

            <div
              
              className="p-6 bg-gray-50 rounded-lg"
            >
              Secure comms
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
