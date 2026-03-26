const Reviews = () => {
    return (
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Customer Reviews</h2>
  
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-gray-100 p-6 rounded-lg">
            <p>
              "Excellent service. Professional team and quick installation."
            </p>
            <h4 className="mt-2 font-semibold">– Darren Robson</h4>
          </div>
  
          <div className="bg-gray-100 p-6 rounded-lg">
            <p>
              "Highly recommend. Friendly engineers and great experience."
            </p>
            <h4 className="mt-2 font-semibold">– Sandra Conway</h4>
          </div>
        </div>
      </section>
    );
  };
  
  export default Reviews;