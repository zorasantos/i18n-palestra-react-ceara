'use client';

import { useRouter } from 'next/navigation';
import { useLocale } from "next-intl"
import React, { ChangeEvent, useTransition } from 'react';
import { useTranslations } from "next-intl"


const Select: React.FC = () => {
  const t = useTranslations('select')
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  return (
    <div className='w-96'>
      <label htmlFor="languages" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t('label')}</label>
        <select disabled={isPending} onChange={onSelectChange} defaultValue={localActive} id="languages" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected disabled>{t('disable_options')}</option>
          <option value="en-US">{t('options.en')}</option>
          <option value="de-DE">{t('options.de')}</option>
          <option value="pt-BR">{t('options.pt')}</option>
          <option value="id">{t('options.id')}</option>
        </select>
      </div>
  );
};

export default Select;
