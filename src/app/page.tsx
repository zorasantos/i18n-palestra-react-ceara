import TextField from "@/components/TextFielt";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
      <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select a language</label>
        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected>Choose a language</option>
          <option value="US">English</option>
          <option value="DE">Deutsch</option>
          <option value="FR">Portuguese</option>
        </select>
      </div>
        <form>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <TextField id="first_name" label="First name" placeholder="John" />
            <TextField id="last_name" label="Last name" placeholder="Doe" />
            <TextField id="address" label="Address" placeholder="1234 Main St" />
            <TextField id="phone" label="Phone number" placeholder="123-45-678" />
            <TextField id="city" label="City" placeholder="New York" />
          </div>
          <div className="mb-6">
            <TextField id="email" label="Email address" placeholder="john.doe@company.com" />
          </div>
          <div className="mb-6">
            <TextField id="password" label="Password" placeholder="•••••••••" type="password" />
          </div>
          <div className="mb-6">
            <TextField id="confirm_password" label="Confirm password" placeholder="•••••••••" type="password" />
          </div>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
    </main>
  );
}
