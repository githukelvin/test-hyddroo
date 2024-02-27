// Import the necessary modules or functions
import { africasSms } from "@/utils/africassms.js";
import { useAuthStore } from "@/store/auth.ts";
// Define the event handler using defineEventHandler
export default defineEventHandler(async (event) => {
  const AfricasTalking = africasSms();

  try {
    // Check if event.data is defined
    if (!event.context.params) {
      throw new Error("Event data is undefined");
    }
    console.log(event.data);
    const { phone, message } = event.context.params;
    // Initialize the SMS service
    const sms = AfricasTalking.SMS;
    console.log("Event received:", event);

    // Define the SMS message options
    const options = {
      to: [`${phone}`],
      message: message,
      // Set your shortCode or senderId
      from: "",
    };

    // Send the OTP via SMS
    const response = await sms.send(options);

    // Log the response
    console.log(response);

    // Return success response
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "OTP sent successfully" }),
    };
  } catch (error) {
    // Return error response if sending OTP fails
    console.error("Failed to send OTP:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send OTP", details: error }),
    };
  }
});
