'use client'
import Select from "@/components/Select";
import TextField from "@/components/TextField";
import { formSchema } from "@/schema/formValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl"
import { useForm } from "react-hook-form";

export default function Home() {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema),
  })


  const onSubmit = () => {
    console.log('onSubmit')
  }


  const fn = useTranslations('first_name')
  const ln = useTranslations('last_name')
  const ad = useTranslations('address')
  const pn = useTranslations('phone_number')
  const ct = useTranslations('city')
  const em = useTranslations('email')
  const pw = useTranslations('password')
  const cp = useTranslations('confirm_password')
  const sb = useTranslations('submit_button')

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-10">
        <Select />
        <form onSubmit={handleSubmit(onSubmit)} className="w-full px-48">
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div className="flex flex-col gap-1">
              <TextField {...register('first_name')} id="first_name" label={fn('label')} placeholder={fn('placeholder')} />
              {errors.first_name && <p className="text-red-500 text-xs">{fn('message_error')}</p>}
            </div>
            <div className="flex flex-col gap-1">
            <TextField id="last_name" label={ln('label')} placeholder={ln('placeholder')} />
              {errors.last_name && <p className="text-red-500 text-xs">{ln('message_error')}</p>}
            </div>
            <div className="flex flex-col gap-1">
              <TextField id="address" label={ad('label')} placeholder={ad('placeholder')} />
              {errors.address && <p className="text-red-500 text-xs">{ad('message_error')}</p>}
            </div>
            <div className="flex flex-col gap-1">
              <TextField id="city" label={ct('label')} placeholder={ct('placeholder')} />
              {errors.city && <p className="text-red-500 text-xs">{ct('message_error')}</p>}
            </div>
            <div className="flex flex-col gap-1">
              <TextField id="phone" label={pn('label')} placeholder={pn('placeholder')} />
              {errors.phone && <p className="text-red-500 text-xs">{pn('message_error')}</p>}
            </div>
            <div className="flex flex-col gap-1">
              <TextField id="email" label={em('label')} placeholder={em('placeholder')} />
              {errors.email && <p className="text-red-500 text-xs">{em('message_error')}</p>}
            </div>
          </div>

          <div className="flex flex-col gap-1 mb-6">
            <TextField id="password" label={pw('label')} placeholder={pw('placeholder')} type="password" />
            {errors.password && <p className="text-red-500 text-xs">{pw('message_error')}</p>}
          </div>
          <div className="flex flex-col gap-1 mb-6">
            <TextField id="confirm_password" label={cp('label')} placeholder={cp('placeholder')} type="password" />
            {errors.confirm_password && <p className="text-red-500 text-xs">{cp('message_error')}</p>}
          </div>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{sb('text')}</button>
        </form>
    </main>
  );
}
