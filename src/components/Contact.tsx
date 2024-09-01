"use client";
import React, { useState } from "react";

const defaultFormState = {
  name: {
    value: "",
    error: "",
  },
  email: {
    value: "",
    error: "",
  },
  message: {
    value: "",
    error: "",
  },
};

export const Contact = () => {
  const [formData, setFormData] = useState(defaultFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const validateForm = () => {
    let isValid = true;
    const newFormData = { ...formData };

    if (newFormData.name.value.trim() === "") {
      newFormData.name.error = "Name is required";
      isValid = false;
    } else {
      newFormData.name.error = "";
    }

    if (newFormData.email.value.trim() === "") {
      newFormData.email.error = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(newFormData.email.value)) {
      newFormData.email.error = "Email is invalid";
      isValid = false;
    } else {
      newFormData.email.error = "";
    }

    if (newFormData.message.value.trim() === "") {
      newFormData.message.error = "Message is required";
      isValid = false;
    } else if (newFormData.message.value.length < 10) {
      newFormData.message.error = "Message must be at least 10 characters long";
      isValid = false;
    } else {
      newFormData.message.error = "";
    }

    setFormData(newFormData);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.value,
          email: formData.email.value,
          message: formData.message.value,
        }),
      });

      if (response.ok) {
        setSubmitStatus('Message sent successfully!');
        setFormData(defaultFormState);
      } else {
        const data = await response.json();
        setSubmitStatus(data.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: {
        value,
        error: '',
      },
    }));
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <div className="w-full">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
            value={formData.name.value}
            onChange={handleInputChange}
          />
          {formData.name.error && <p className="text-red-500 text-xs mt-1">{formData.name.error}</p>}
        </div>
        <div className="w-full">
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
            value={formData.email.value}
            onChange={handleInputChange}
          />
          {formData.email.error && <p className="text-red-500 text-xs mt-1">{formData.email.error}</p>}
        </div>
      </div>
      <div className="mt-5">
        <textarea
          name="message"
          placeholder="Your Message"
          rows={10}
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={formData.message.value}
          onChange={handleInputChange}
        />
        {formData.message.error && <p className="text-red-500 text-xs mt-1">{formData.message.error}</p>}
      </div>
      <button
        className="w-full px-2 py-2 mt-4 bg-neutral-100 rounded-md font-bold text-neutral-500 disabled:opacity-50"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
      {submitStatus && (
        <p className={`mt-4 text-center ${submitStatus.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
          {submitStatus}
        </p>
      )}
    </form>
  );
};
