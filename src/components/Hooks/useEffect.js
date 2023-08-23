import { useEffect } from "react";

export default function Effect() {
  useEffect(() => {
    // Perform some async operation
    const fetchData = () => {
      console.log("runng use Effect hook here ========");
    };
    fetchData();

    // Cleanup function
    return () => {
      // Perform cleanup or resource disposal
      // This will be executed when the component unmounts or before the next effect runs
      // For example, you can cancel an ongoing request or unsubscribe from a subscription
      console.log("Cleanup function >>>>>> ");
    };
  }, []);
}
