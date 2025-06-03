import { useState } from "react";
import { Phone, MapPin, XCircle } from "lucide-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchema } from "@/utils/validations/contactFormSchema";
import emailjs from "emailjs-com";

interface AppointmentFormValues {
  name: string;
  phone: string;
  email: string;
  message: string;
  date: string;
  time?: string;
}

const sendEmail = (values: AppointmentFormValues): Promise<any> => {
  return emailjs.send(
    "service_rk6vmir",
    "template_jjfwj4a",
    {
    name: values.name,
    phone: values.phone,
    email: values.email,
    message: values.message,
    date: values.date,
    time: values.time || "Not specified",
  },
    "CbGnmW7jNz-bngaVf"
  );
};

const AppointmentBooking = () => {
  const [showPopup, setShowPopup] = useState(false);

  // Calculate next week's date range
  const today = new Date();
  const nextWeekStart = new Date(today);
  nextWeekStart.setDate(today.getDate() + 1);
  const nextWeekEnd = new Date(today);
  nextWeekEnd.setDate(today.getDate() + 7);

  const minDate = nextWeekStart.toISOString().split("T")[0];
  const maxDate = nextWeekEnd.toISOString().split("T")[0];

  return (
    <div className="min-h-screen bg-white py-8 px-4 transition-colors duration-300">
      <div className="max-w-xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 bg-white px-8 py-4 mb-4 rounded-full shadow">
            <img
              src="/logo.svg"
              alt="Clinic Logo"
              width={48}
              height={48}
              className="rounded-full object-cover"
            />
            <div className="flex flex-col leading-none text-left">
              <span className="text-black font-extrabold text-xl sm:text-2xl leading-none">
                Dr. Farsana&apos;s
              </span>
              <span className="text-gray-500 font-medium text-sm sm:text-base tracking-wide -mt-0.5">
                Dental Clinic
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center text-gray-500 mb-2">
            <Phone className="w-4 h-4 mr-2" />
            <span>+91 9895202100</span>
          </div>
          <h1 className="text-3xl font-semibold text-gray-800 mb-8">
            Book an Appointment
          </h1>
        </div>

        <Formik
          initialValues={{
            name: "",
            phone: "",
            email: "",
            message: "",
            date: "",
            time: "",
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, { resetForm }) => {
            try {
              await sendEmail(values);
              setShowPopup(true);
              resetForm();
            } catch (error) {
              console.error("Error sending email:", error);
            }
          }}
        >
          {({ isSubmitting, isValid }) => (
            <Form className="bg-white rounded-lg shadow p-6 space-y-5 transition-colors duration-300">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name*
                </label>
                <Field
                  type="text"
                  name="name"
                  className="w-full p-3 border border-gray-300 rounded-lg  bg-white text-black"
                  placeholder="Your Name"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number*
                </label>
                <Field
                  type="tel"
                  name="phone"
                  className="w-full p-3 border border-gray-300 rounded-lg  bg-white text-black"
                  placeholder="Your Phone Number"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email*
                </label>
                <Field
                  type="email"
                  name="email"
                  className="w-full p-3 border border-gray-300 rounded-lg  bg-white text-black"
                  placeholder="Your Email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Date*
                </label>
                <Field
                  type="date"
                  name="date"
                  min={minDate}
                  max={maxDate}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 bg-white text-black"
                />
                <ErrorMessage
                  name="date"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Time (optional)
                </label>
                <Field
                  type="time"
                  name="time"
                  min="10:00"
                  max="18:00"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 bg-white text-black"
                />
                <ErrorMessage
                  name="time"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message / Reason
                </label>
                <Field
                  as="textarea"
                  name="message"
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg  bg-white text-black"
                  placeholder="Which service do you need? Any message for us?"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting || !isValid}
                className="w-full bg-sky-600 hover:bg-sky-700 text-white py-3 rounded-lg font-semibold text-lg transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                Send
              </button>
            </Form>
          )}
        </Formik>

        <div className="mt-8 text-center">
          <div className="flex items-center justify-center text-gray-500 mb-4">
            <MapPin className="w-4 h-4 mr-2" />
            <span>1st Floor, SMT complex, Maranchery, Kerala, India</span>
          </div>
        </div>

        <div className="mt-6 bg-white rounded-lg overflow-hidden shadow-sm">
          <iframe
            title="Clinic Location"
            src="https://www.google.com/maps?q=10.7302697,75.9751381&hl=en&z=16&output=embed"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-xs w-full text-center relative">
              <button
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                onClick={() => setShowPopup(false)}
              >
                <XCircle className="w-6 h-6" />
              </button>
              <div className="text-2xl mb-2 text-gray-800">Thank you!</div>
              <div className="text-gray-600 mb-4">
                We will contact you shortly.
              </div>
              <button
                className="mt-2 px-6 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-lg font-medium"
                onClick={() => setShowPopup(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-400">
          Designed & Developed by <span className="font-medium">Haneen</span>
          <br />
          <a
            href="mailto:haneen.webdev@gmail.com"
            className="text-sky-600 hover:underline"
          >
            haneen.webdev@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBooking;
