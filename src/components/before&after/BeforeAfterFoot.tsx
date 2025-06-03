import AppointmentButton from "../common/AppointmentButton";

const BeforeAfterFoot = () => {
  return (
    <div className="bg-blue-50 dark:bg-background py-12">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Ready for Your Transformation?
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Schedule a consultation to discuss your smile goals and treatment
          options.
        </p>
        <AppointmentButton children="Book Consultation" className="rounded-full text-lg py-4" />
      </div>
    </div>
  );
};

export default BeforeAfterFoot;