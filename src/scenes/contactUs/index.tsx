/* eslint-disable @typescript-eslint/no-misused-promises */

import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png';
import HText from '@/shared/HText';
import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyles =
    'mt-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white';

  const {
    trigger,
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormValues>({
    mode: 'onBlur',
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* Header */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </HText>
          <p className="my-5">
            Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
            sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
            adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
          </p>
        </motion.div>
        {/* Form & Image */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              method="POST"
              action="https://formsubmit.co/b86faa17fe101a87292d11f7fa5452f9"
            >
              {/* Input Name */}
              <input
                type="text"
                className={inputStyles}
                placeholder="NAME"
                {...register('name', {
                  required: true,
                  minLength: {
                    value: 2,
                    message: 'Must be at least 2 characters',
                  },
                })}
              />
              {errors?.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === 'required' && 'Required field'}
                  {errors.name.type === 'minLength' && errors.name.message}
                </p>
              )}

              {/* Input Email */}
              <input
                type="text"
                className={inputStyles}
                placeholder="EMAIL"
                {...register('email', {
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
              />
              {errors?.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === 'required' && 'Required field'}
                  {errors.email.type === 'pattern' && errors.email.message}
                </p>
              )}

              {/* Input Message */}
              <textarea
                className={inputStyles}
                placeholder="MESSAGE"
                rows={4}
                cols={50}
                style={{ resize: 'none' }}
                {...register('message', {
                  required: true,
                  maxLength: {
                    value: 2000,
                    message: 'Max length is 2000 characters',
                  },
                })}
              />
              {errors?.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === 'required' && 'Required field'}
                  {errors.message.type === 'maxLength' &&
                    errors.message.message}
                </p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>

          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
              <img
                src={ContactUsPageGraphic}
                alt="contact us page graphic"
                className="w-full mt-5"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
