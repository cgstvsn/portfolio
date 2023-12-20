"use client";

import { Fragment, useState, useRef, useContext } from "react";
import { ModalContext } from "@/context/modal.context";
import { Dialog, Transition } from "@headlessui/react";
// TODO get rid of radix dependency
import * as Form from "@radix-ui/react-form";
import emailjs from "@emailjs/browser";

export default function ContactModal() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const { modalOpen, closeModal } = useContext(ModalContext);

  const form = useRef();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    if (sent || sending) return;

    setSending(true);
    setSent(false);
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sz2xsnn",
        "template_497y9hb",
        // @ts-ignore
        form.current,
        "9QcDtVTlFJVkOp0LU"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSending(false);
          setSent(true);
        },
        (error) => {
          console.log(error.text);
          setSending(false);
          alert(
            "Could not send your message, try again later or email me directly at cameron.gustavson@gmail.com"
          );
        }
      );
  };

  return (
    <Transition.Root show={modalOpen || false} as={Fragment}>
      <Dialog as='div' className='relative z-30' onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-zinc-900 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 z-10 overflow-y-auto'>
          <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel className='relative overflow-hidden bg-zinc-800 rounded-lg transition-all w-full sm:w-[400px] p-6'>
                {!(sending || sent) ? (
                  <>
                    <h3 className='text-3xl font-semibold text-zinc-300 mb-4'>
                      Send me a message!
                    </h3>
                    <p className='text-zinc-400 mb-4'>
                      You can email me directly instead at
                      cameron.gustavson@gmail.com if you prefer!
                    </p>

                    <Form.Root
                      // @ts-ignore
                      ref={form}
                      className='w-full'
                      onSubmit={sendEmail}
                    >
                      {/* Email */}
                      <Form.Field
                        name='email'
                        className='flex flex-col items-start gap-2 mb-4'
                      >
                        <div className='flex gap-4 justify-between w-full'>
                          <Form.Label className='text-zinc-400'>
                            Email
                          </Form.Label>
                          <Form.Message
                            match='valueMissing'
                            className='text-red-400'
                          >
                            Please enter your email.
                          </Form.Message>
                          <Form.Message
                            match='typeMismatch'
                            className='text-red-400'
                          >
                            Please enter a valid email.
                          </Form.Message>
                        </div>
                        <Form.Control asChild className='w-full'>
                          <input
                            className='rounded-md bg-zinc-700 text-zinc-300 py-1 px-2 hover:brightness-110 transition autofill:!bg-zinc-600 outline-0 ring-zinc-500 focus:ring-2'
                            type='email'
                            required
                          />
                        </Form.Control>
                      </Form.Field>

                      {/* Name */}
                      <Form.Field
                        name='name'
                        className='flex flex-col items-start gap-2 mb-4'
                      >
                        <div className='flex gap-4 justify-between w-full'>
                          <Form.Label className='text-zinc-400'>
                            Name
                          </Form.Label>
                          <Form.Message
                            match='valueMissing'
                            className='text-red-400'
                          >
                            Please enter your name.
                          </Form.Message>
                        </div>
                        <Form.Control asChild className='w-full'>
                          <input
                            className='rounded-md bg-zinc-700 text-zinc-300 py-1 px-2 hover:brightness-110 transition autofill:!bg-zinc-600 outline-0 ring-zinc-500 focus:ring-2'
                            type='text'
                            required
                          />
                        </Form.Control>
                      </Form.Field>

                      {/* Message */}
                      <Form.Field
                        name='message'
                        className='flex flex-col items-start gap-2 mb-4'
                      >
                        <div className='flex gap-4 justify-between w-full'>
                          <Form.Label className='text-zinc-400'>
                            Message
                          </Form.Label>
                          <Form.Message
                            match='valueMissing'
                            className='text-red-400'
                          >
                            Please enter a message.
                          </Form.Message>
                        </div>
                        <Form.Control asChild className='w-full'>
                          <textarea
                            className='rounded-md bg-zinc-700 text-zinc-300 py-1 px-2 hover:brightness-110 transition autofill:!bg-zinc-600 outline-0 ring-zinc-500 focus:ring-2'
                            required
                          />
                        </Form.Control>
                      </Form.Field>

                      <Form.Submit asChild>
                        <button className='rounded-lg bg-zinc-700 border-t border-l border-zinc-600 px-3 py-1 w-full mt-4 hover:brightness-125 transition active:scale-95'>
                          <div className='flex items-center justify-center gap-2'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth={1.5}
                              stroke='currentColor'
                              className='w-4 h-4'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5'
                              />
                            </svg>
                            <p>Send</p>
                          </div>
                        </button>
                      </Form.Submit>
                    </Form.Root>
                  </>
                ) : (
                  <div className='w-ful flex flex-col gap-4 items-center'>
                    {/* spinner or check */}
                    {!sent ? (
                      <div role='status'>
                        <svg
                          aria-hidden='true'
                          className='w-12 h-12 mr-2 text-gray-200 animate-spin dark:text-zinc-400 fill-white'
                          viewBox='0 0 100 101'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                            fill='currentColor'
                          />
                          <path
                            d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                            fill='currentFill'
                          />
                        </svg>
                        <span className='sr-only'>Sending...</span>
                      </div>
                    ) : (
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='w-12 h-12'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                    )}
                    {/* text */}
                    {!sent ? (
                      <p className='text-zinc-400'>Sending your message...</p>
                    ) : (
                      <div className='flex flex-col gap-4 items-center'>
                        <p className='text-zinc-300 font-bold'>
                          Message sent! I will get back to you ASAP!
                        </p>
                        <p className='text-zinc-400'>
                          Click outside window to close.
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
