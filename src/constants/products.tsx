import ollamaEvaluationsSenna from "public/images/ollama-evaluations-senna.png";
import ollamaEvaluationsSenna2 from "public/images/ollama-evaluations-senna-2.png";
import sennaFrontend from "public/images/senna-frontend.png";
import sennaFrontend2 from "public/images/senna-frontend-2.png";
import sennaApiManagement from "public/images/senna-api-management.png";
import sennaApiManagement2 from "public/images/senna-api-management-2.png";
import sennaLlmApi from "public/images/senna-llm-api.png";
import sennaLlmApi2 from "public/images/senna-llm-api-2.png";
import samiBookingAgent from "public/images/sami-booking-agent.png";
import samiBookingAgent2 from "public/images/sami-booking-agent-2.png";

export const products = [
  {
    href: "https://github.com/matratau000/ollama-evaluations-senna",
    title: "Ollama Evaluations - Senna",
    description:
      "A Python-based evaluation framework for testing and validating AI models using Senna. This tool helps streamline the process of evaluating different AI models against specific criteria to ensure optimal performance.",
    thumbnail: ollamaEvaluationsSenna,
    images: [ollamaEvaluationsSenna, ollamaEvaluationsSenna2],
    stack: ["Python", "Senna API"],
    slug: "ollama-evaluations-senna",
    content: (
      <div>
        <p>
          This project provides an evaluation framework designed to test AI models using the Senna API. The tool enables developers to send prompts to multiple models, analyze their responses, and validate the performance across various metrics. It’s an essential tool for ensuring the robustness of AI models in different scenarios.
        </p>
        <p>
          The framework is built with flexibility in mind, allowing for customizable evaluation criteria and integration with various AI platforms. This project exemplifies my focus on building tools that enhance AI model development and evaluation processes.
        </p>
      </div>
    ),
  },
  {
    href: "https://github.com/matratau000/senna-frontend",
    title: "Senna Frontend",
    description:
      "A frontend application built with TypeScript, providing a user-friendly interface for interacting with the Senna API and managing AI evaluations.",
    thumbnail: sennaFrontend,
    images: [sennaFrontend, sennaFrontend2],
    stack: ["TypeScript", "React", "Senna API"],
    slug: "senna-frontend",
    content: (
      <div>
        <p>
          The Senna Frontend project offers a sleek and intuitive interface for users to interact with the Senna AI evaluation framework. Built with TypeScript and React, this application simplifies the management of AI evaluations, providing real-time feedback and detailed reports on model performance.
        </p>
        <p>
          This project highlights my commitment to creating user-centered design and functionality, ensuring that complex AI tools are accessible and easy to use for developers and researchers alike.
        </p>
      </div>
    ),
  },
  {
    href: "https://github.com/matratau000/senna-api-management",
    title: "Senna API Management",
    description:
      "A backend management system for the Senna API, facilitating efficient API calls, data handling, and integration with frontend applications.",
    thumbnail: sennaApiManagement,
    images: [sennaApiManagement, sennaApiManagement2],
    stack: ["TypeScript", "Node.js", "Express"],
    slug: "senna-api-management",
    content: (
      <div>
        <p>
          This project serves as the backbone for managing API calls and data processing within the Senna evaluation framework. Developed using TypeScript, Node.js, and Express, it ensures seamless communication between the frontend and the underlying AI models.
        </p>
        <p>
          The Senna API Management system is designed to handle high volumes of data efficiently, providing a reliable infrastructure for running large-scale AI evaluations. It reflects my expertise in building robust backend systems that support complex AI operations.
        </p>
      </div>
    ),
  },
  {
    href: "https://github.com/matratau000/senna-llm-api",
    title: "Senna LLM API",
    description:
      "An API designed for integrating large language models (LLMs) into various applications, enabling advanced natural language processing capabilities.",
    thumbnail: sennaLlmApi,
    images: [sennaLlmApi, sennaLlmApi2],
    stack: ["TypeScript", "Node.js", "Express"],
    slug: "senna-llm-api",
    content: (
      <div>
        <p>
          The Senna LLM API project provides a powerful interface for integrating large language models into applications, allowing developers to leverage advanced natural language processing capabilities. Built with TypeScript and Node.js, this API is optimized for performance and scalability.
        </p>
        <p>
          This project underscores my focus on enabling seamless integration of AI technologies into real-world applications, enhancing the functionality and user experience of AI-driven products.
        </p>
      </div>
    ),
  },
  {
    href: "https://github.com/matratau000/sami-booking-agent",
    title: "Sami Booking Agent",
    description:
      "A Python-based booking database system for managing appointments and scheduling for Sami, an AI-powered assistant.",
    thumbnail: samiBookingAgent,
    images: [samiBookingAgent, samiBookingAgent2],
    stack: ["Python", "SQLite", "Flask"],
    slug: "sami-booking-agent",
    content: (
      <div>
        <p>
          The Sami Booking Agent is a Python-driven application designed to manage scheduling and appointments for Sami, an AI-powered assistant. It features a robust database system built with SQLite and is managed through a Flask-based web interface.
        </p>
        <p>
          This project showcases my ability to develop comprehensive backend solutions that support AI-driven operations, ensuring smooth and efficient management of tasks like scheduling and booking.
        </p>
      </div>
    ),
  },
];