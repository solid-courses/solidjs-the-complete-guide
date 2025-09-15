# SolidJS: The Complete Guide

Welcome to the official repository for **SolidJS: The Complete Guide**, a comprehensive resource for learning SolidJS from first principles to advanced application architecture.

The book is available for purchase:

* https://solid.courses/p/solidjs-the-complete-guide/
* https://leanpub.com/solid-js

This repository is dedicated to tracking and addressing any issues, feedback, or suggestions related to the book. Your insights are invaluable, whether it's to report errors, share thoughts on the book, or suggest ways to improve the content.

SolidJS is a modern reactive UI library that focuses on fine-grained reactivity and predictable rendering, making it both approachable for newcomers and powerful for experienced developers. This book is not just a surface-level overview—it is a deep dive into the mechanics of Solid and its ecosystem, paired with **plenty of hands-on examples** that you can run and adapt as you learn.  

## What you’ll learn  

The journey begins with an **introduction to Solid**—why it exists, the problems it solves, and how it differs from React and other frameworks. From there, we move into the essentials:  

- **Reactivity at the core** – Understanding signals, effects, memos, computations, and batching.  
- **JSX in Solid** – Rules, attributes, expressions, and how Solid’s JSX differs from React’s.  
- **Building user interfaces** – Composing components, working with props, children, context, and lifecycles.  
- **Managing state** – Signals, stores, and utilities for handling simple and complex state with reactivity in mind.  
- **DOM access and styling** – Using refs, inline styles, class management, and best practices.  
- **Error handling** – Using error boundaries, catching async errors, and writing resilient applications.  

As you advance, the book guides you through more complex concepts and patterns:  

- **Advanced reactivity** – Owners, computations, directives, and reactive utilities like `batch`, `untrack`, and `on`.  
- **Conditional rendering and lists** – Using `Show`, `Switch`, `For`, `Index`, and selectors to efficiently display dynamic data.  
- **Asynchronous data** – Fetching data, managing loading states, working with `createResource`, and coordinating async workflows with `Suspense` and transitions.  
- **Server-side rendering (SSR)** – Rendering strategies, hydration, streaming, and building a server-rendered Solid app.  

And because real-world applications require more than just components and signals, we dedicate full chapters to **Solid Router** and **SolidStart**:  

- **Solid Router** – Learn routing strategies, dynamic and nested routes, layouts, navigation, forms, and data fetching within the router.  
- **SolidStart** – Explore file-based routing, server functions, API endpoints, pre-rendering, data caching, authentication, and building a structured full-stack application with Solid’s official meta-framework.  

## Why this book?  

By combining **theory, best practices, and practical examples**, this guide doesn’t just show you *how* Solid works—it helps you build an intuition for *why* it works the way it does. Each chapter is carefully structured to build on the previous one, giving you a natural progression from simple components to complex, scalable applications.  

Whether you are new to reactive programming or coming from React, Vue, or Svelte, this book gives you the knowledge and practical experience to write **clean, reactive, and production-grade SolidJS apps**.  

⬇️ **Scroll down to see the full Table of Contents and explore the topics covered in detail.**  

## Available Formats:

* PDF
* Epub
* Azw3 (on solid.courses only)

## Feedback

Your thoughts and experiences are incredibly valuable! I’d love to hear how this book has helped you understand SolidJS better, where you’ve applied the concepts, and what could be improved for future readers.  

If you’d like to share feedback, please feel free to [open an issue](../../issues) in this repository. Issues are welcome for:  

- **Corrections** – If you’ve spotted an error, typo, or mistake in the code examples.  
- **Questions** – If a section feels unclear or you’d like additional clarification.  
- **Suggestions** – If you have ideas to improve the structure, depth, or examples in the book.  

Your contributions not only help refine the book but also strengthen the learning experience for the entire SolidJS community. Every question, idea, or fix makes this resource better for everyone.  

Thank you for reading, experimenting, and helping this guide grow!

## Table of Contents

<ul style="list-style:none;margin:0;padding:0">
  <li>1. Introduction</a>
    <ol>
      <li>Code Examples</a></li>
      <li>Contact and Feedback</a></li>
      <li>Requirements</a></li>
      <li>Trying Solid via Online Playground</a></li>
      <li>Creating a Project From a Template</a></li>
      <li>Note For React Developers</a></li>
    </ol>
  </li>
  <li>2. Setting Up a Development Environment</a></li>
  <li>3. On SolidJS</a>
    <ol>
      <li>The Problem Solid Solves</a></li>
      <li>How Solid Works?</a>
        <ol>
          <li>Reactive Data</a></li>
          <li>Composable UI</a></li>
        </ol>
      </li>
      <li>The Advantages of Solid Over Its Alternatives</a>
      </li>
    </ol>
  </li>
  <li>4. How Solid’s Reactive System Works</a>
    <ol>
      <li>Observer Pattern</a></li>
      <li>The Essence of Reactive Core</a>
        <ol>
          <li>Improving Type Definitions for
            <code>createComputation</code></a>
          </li>
          <li>Deriving Reactive Values from Signals</a></li>
        </ol>
      </li>
      <li>Uses of Computations</a></li>
    </ol>
  </li>
  <li>5. Tracking State with Signals</a>
    <ol>
      <li>Overwriting the Comparison Logic</a></li>
      <li>Updating Signals</a></li>
      <li>Deriving Values</a></li>
      <li>Destructuring Signals</a></li>
      <li>Batching Updates</a></li>
    </ol>
  </li>
  <li>6. Running Side-Effects with Effects</a>
    <ol>
      <li>Effects Can Be Nested</a></li>
      <li>Explicit Dependency Tracking</a></li>
      <li>Opting Out of Tracking</a></li>
      <li>Handling External Dependencies</a></li>
    </ol>
  </li>
  <li>7. Caching Values with Memos</a></li>
  <li>8. Rules of JSX</a>
    <ol>
      <li>Elements Should Be Closed</a></li>
      <li>Elements Can Be Nested</a></li>
      <li>Expressions Can Be Used Inside JSX Elements</a></li>
      <li>Elements Can Have Attributes</a></li>
      <li>Missing Attribute Values Default to
        <code>true</code></a>
      </li>
      <li>Comments</a></li>
      <li>Whitespaces Are Trimmed</a></li>
    </ol>
  </li>
  <li>9. Composing User Interfaces</a>
    <ol>
      <li>Components Should Return a Single Root Element</a>
      </li>
      <li>Components Accept Data Through Their
        <code>props</code></a>
      </li>
      <li>Adding Static Types to Components</a></li>
      <li>Components Can Have Children</a></li>
      <li>How Components Are Rendered</a></li>
      <li>Conditional Rendering</a></li>
      <li>Reactive <code>props</code> </a></li>
      <li>Props Should Be Treated as Read-Only</a></li>
      <li>Destructuring Props Changes the Rendering Order</a>
      </li>
      <li>Effects Are Executed After Rendering</a></li>
      <li>Best Practices</a></li>
    </ol>
  </li>
  <li>10. Working with Props</a>
    <ol>
      <li>Passing Data From Parent to Child</a></li>
      <li>Sharing State Between Children</a>
        <ol>
          <li>Providing Controlled Access to Parent’s
            State</a></li>
        </ol>
      </li>
      <li>Passing Data From Child to Parent</a></li>
      <li>Destructuring and Spreading Props</a></li>
      <li>Forwarding Multiple Props at Once</a></li>
      <li>Validating Props</a></li>
    </ol>
  </li>
  <li>11. Sharing Data Through the Context API</a>
    <ol>
      <li>How Context API Works</a></li>
      <li>Best Practices</a></li>
    </ol>
  </li>
  <li>12. Component Lifecycle</a>
    <ol>
      <li><code>onMount</code></a></li>
      <li><code>onCleanup</code></a></li>
      <li>Best Practices</a></li>
    </ol>
  </li>
  <li>13. Accessing DOM Nodes With `ref`</a>
    <ol>
      <li>When <code>ref</code> Functions Execute</a></li>
      <li>Forwarding Refs</a></li>
      <li>Using Refs with External Libraries</a></li>
      <li>Best Practices</a></li>
    </ol>
  </li>
  <li>14. Working with Computations</a>
    <ol>
      <li><code>createComputed</code></a></li>
      <li><code>createRenderEffect</code></a></li>
      <li><code>createEffect</code></a></li>
      <li><code>createMemo</code></a></li>
      <li><code>createDeferred</code></a></li>
      <li><code>createReaction</code></a></li>
    </ol>
  </li>
  <li>15. Handling Errors</a>
    <ol>
      <li><code>ErrorBoundary</code></a></li>
      <li><code>catchError</code></a></li>
      <li>Handling Asynchronous Errors</a></li>
    </ol>
  </li>
  <li>16. Working with Owners</a>
    <ol>
      <li>Accessing Currently Executing Computation</a></li>
      <li>Reactivity in Asynchronous Context</a></li>
    </ol>
  </li>
  <li>17. Styling Elements</a>
    <ol>
      <li>Using Inline Styles</a></li>
      <li>Applying Style Definitions</a></li>
      <li>Applying Classes Conditionally</a></li>
      <li>Using the Imperative API</a></li>
    </ol>
  </li>
  <li>18. Reactive Utilities</a>
    <ol>
      <li><code>batch</code></a></li>
      <li><code>untrack</code></a></li>
      <li><code>on</code></a></li>
      <li><code>createRoot</code></a></li>
      <li><code>mergeProps</code></a></li>
      <li><code>splitProps</code></a>
        <ol>
          <li>Why Use <code>splitProps</code> and
            <code>mergeProps</code>?</a>
          </li>
        </ol>
      </li>
      <li><code>mapArray</code> and
        <code>indexArray</code></a>
      </li>
      <li><code>observable</code></a></li>
      <li><code>from</code></a></li>
      <li><code>startTransition</code> and
        <code>useTransition</code></a>
      </li>
    </ol>
  </li>
  <li>19. A Better Conditional Rendering</a>
    <ol>
      <li>Show</a>
        <ol>
          <li>Keyed Rendering</a></li>
          <li>Render Props</a></li>
        </ol>
      </li>
      <li><code>Switch</code> and <code>Match</code></a></li>
    </ol>
  </li>
  <li>20. Working with Lists</a>
    <ol>
      <li><code>For</code></a></li>
      <li><code>mapArray</code></a></li>
      <li>Index</a></li>
      <li><code>indexArray</code></a></li>
      <li>Selecting Items with Selectors</a></li>
    </ol>
  </li>
  <li>21. Rendering Components Outside the Component
    Hierarchy</a></li>
  <li>22. Managing Complex States with Stores</a>
    <ol>
      <li>Accessing Data</a></li>
      <li>Updating Stores</a></li>
      <li>Limitations Related to Reactivity</a></li>
      <li>Store Utilities</a>
        <ol>
          <li><code>produce</code></a></li>
          <li><code>reconcile</code></a></li>
          <li><code>unwrap</code></a></li>
          <li><code>createMutable</code></a></li>
        </ol>
      </li>
    </ol>
  </li>
  <li>23. Abstracting Behavior With Custom Directives</a>
    <ol>
      <li>Extending JSX Type with Custom Directives</a></li>
      <li>Using Imported Directives</a></li>
    </ol>
  </li>
  <li>24. Working with Asynchronous Data</a>
    <ol>
      <li>Decoupling Fetching From Rendering</a></li>
    </ol>
  </li>
  <li>25. Using Resource API for Data Fetching</a>
    <ol>
      <li>Info Object</a></li>
      <li>Resource Actions</a></li>
      <li>Error Handling with Resources</a>
        <ol>
          <li>Display the Error in the UI</a></li>
          <li>Rethrow During Rendering</a></li>
          <li>Rethrow inside an Effect or Computated</a></li>
        </ol>
      </li>
      <li>Paginated Data with Resources: A Book List
        Example</a></li>
    </ol>
  </li>
  <li>26. Managing Loading States with Suspense</a></li>
  <li>27. Achieving Better Consistency with Transitions</a>
  </li>
  <li>28. Coordinating Loading States</a></li>
  <li>29. Code Splitting and Lazy Loading</a></li>
  <li>30. Handling Events</a>
    <ol>
      <li>Using JSX Attributes with the <code>on</code>
        Prefix</a></li>
      <li>Using JSX Attributes with the <code>on:</code>
        Prefix</a></li>
      <li>Using Custom Properties</a></li>
      <li>Using Refs</a></li>
      <li>Using Custom Directives</a></li>
      <li>Passing Data to Event Handlers </a></li>
    </ol>
  </li>
  <li>31. Dynamically Rendering Components</a></li>
  <li>32. Solid Without JSX</a>
    <ol>
      <li>Solid with Tagged Template Literals</a></li>
      <li>Solid with Hyperscript</a></li>
      <li>Drawbacks</a></li>
    </ol>
  </li>
  <li>33. Server Side Rendering</a>
    <ol>
      <li>Issues With Single Page Applications</a></li>
      <li>SSR: Visible Content From the First Byte</a></li>
      <li>Three Rendering Approaches for SSR Applications</a>
      </li>
      <li><code>renderToString</code> - Synchronous HTML
        Generation</a></li>
      <li><code>renderToStringAsync</code> - Asynchronous HTML
        Generation</a></li>
      <li><code>renderToStream</code> - Streaming with
        Progressive Rendering</a></li>
      <li>Hydration: Breathing Life into Server-Rendered
        Pages</a></li>
      <li>Targeting the Server Context</a></li>
      <li>Targeting the Development Build</a></li>
      <li>Practical Guide to Server-Rendering</a></li>
      <li>Separating Application Shell from Client Logic</a>
      </li>
      <li>Building a Full-Stack App with Express and Solid
        Router</a></li>
    </ol>
  </li>
  <li>34. Solid Router</a>
    <ol>
      <li>Setting Up Development Environment</a>
        <ol>
          <li>Client-Only Development Environment</a></li>
          <li>SolidStart Development Environment</a></li>
        </ol>
      </li>
      <li>Installing Solid Router</a></li>
      <li>Routing Strategies</a></li>
      <li>Anatomy of a URL</a>
        <ol>
          <li>Clean URLs</a></li>
        </ol>
      </li>
      <li>Introducing the <code>Router</code> Component</a>
        <ol>
          <li>Error Handling Considerations</a></li>
        </ol>
      </li>
      <li>Defining Routes</a></li>
      <li>Lazy Loading Route Components</a></li>
      <li>Matching Dynamic Paths</a></li>
      <li>Filtering Dynamic Paths</a></li>
      <li>Optional Parameters</a></li>
      <li>Catch-All Routes and Handling 404s</a>
        <ol>
          <li>Named Wildcards for Flexibility</a></li>
          <li>Wildcards Beyond Catch-All Routes</a></li>
          <li>Use Cases for Wildcard Routes</a></li>
          <li>Matching Multiple Paths in a Route</a></li>
          <li>Attaching Metadata</a></li>
        </ol>
      </li>
      <li>Layouts</a>
        <ol>
          <li>Rendering Different Layouts Conditionally</a>
          </li>
          <li>Rendering Different Layouts via Nested
            Routes</a></li>
        </ol>
      </li>
      <li>Nested Routes</a>
        <ol>
          <li>Providing a Shared Layout</a></li>
          <li>Nested Routes via Configuration</a></li>
        </ol>
      </li>
      <li>Alternative Routers</a>
        <ol>
          <li>Hash Mode Router</a></li>
          <li>Memory Router</a></li>
        </ol>
      </li>
      <li>Linking and Navigation</a>
        <ol>
          <li>Using Anchor Elements</a>
            <ol>
              <li>Targeting New Tabs or Frames</a></li>
              <li>Adding Keyboard Shortcuts with
                <code>accesskey</code></a>
              </li>
              <li>Security Considerations for Anchor
                Elements</a></li>
            </ol>
          </li>
          <li>Using the <code>A</code> Component</a></li>
          <li>Programmatic Navigation</a></li>
          <li>The <code>redirect</code> Function</a>
            <ol>
              <li>Using redirect in Queries and Actions</a>
              </li>
              <li>Single Flight Mutations</a></li>
              <li><code>throw</code> vs
                <code>return</code></a>
              </li>
            </ol>
          </li>
        </ol>
      </li>
      <li>Hosting Apps in Subdirectories</a></li>
      <li>Preloading</a>
        <ol>
          <li>Inside the preload Function</a></li>
          <li>Manually Preloading with
            <code>usePreloadRoute</code></a>
          </li>
        </ol>
      </li>
      <li>Accessing Route Related Data</a>
        <ol>
          <li>Accessing URL Information with
            <code>useLocation</code></a>
          </li>
          <li>Managing Query Parameters with
            <code>useSearchParams</code></a>
          </li>
          <li>Extracting Route Parameters with
            <code>useParams</code></a>
          </li>
          <li>Matching Routes with <code>useMatch</code> and
            <code>useCurrentMatches</code></a>
          </li>
        </ol>
      </li>
      <li>Displaying Transition Indicators</a></li>
      <li>Intercepting Route Changes with
        <code>useBeforeLeave</code></a>
      </li>
      <li>Fetching Async Data</a></li>
      <li>Deduplicated Data Fetching</a></li>
      <li>Updating Remote Data With Web Forms</a>
        <ol>
          <li>Working With Web Forms</a></li>
          <li>Collecting User Inputs and Performing Data
            Updates</a></li>
          <li>Providing Unique Names For Serialization</a>
          </li>
          <li>Passing Arguments Directly</a></li>
          <li>Programmatically Invoking Actions</a></li>
          <li>Handling Form Errors</a></li>
          <li>Helper Functions</a></li>
          <li>Tracking Form Submissions with
            <code>useSubmission</code> and <code>useSubmissions</code></a>
          </li>
        </ol>
      </li>
      <li>Reactive Forms with Authentication and
        Validation</a></li>
    </ol>
  </li>
  <li>35. Isomorphic Apps with SolidStart</a>
    <ol>
      <li>Introducing SolidStart</a></li>
      <li>Project Setup &amp; Configuration</a></li>
      <li>Project Structure</a></li>
      <li>Building Navigation with File-Based Routes</a>
        <ol>
          <li>Dynamic Parameters</a></li>
          <li>Optional Parameters</a></li>
          <li>Catch-All Routes</a></li>
          <li>Logical Naming for Cleaner File Organization</a>
            <ol>
              <li>Renaming index.tsx for Discoverability</a>
              </li>
              <li>Using Folders for Logical Grouping</a></li>
            </ol>
          </li>
          <li>Escaping Folder-Based Nesting</a></li>
          <li>Creating Shared Page Structures with Layouts</a>
          </li>
          <li>Defining Layouts for Nested Routes</a>
            <ol>
              <li>Escaping Nested Layouts</a></li>
            </ol>
          </li>
        </ol>
      </li>
      <li>Serving Static Assets</a>
        <ol>
          <li>Using <code>import</code> Statements</a></li>
        </ol>
      </li>
      <li>Styling Components</a>
        <ol>
          <li>Using Stylesheets</a></li>
          <li>Using CSS Modules</a></li>
          <li>CSS-in-JS</a></li>
        </ol>
      </li>
      <li>Data Exchange Between the Server and Client</a>
        <ol>
          <li>Basic Data Fetching: API Endpoints</a></li>
          <li>Idiomatic Data Fetching: Server Functions</a>
          </li>
          <li>Performing Server-Side Mutations: Server
            Actions</a></li>
        </ol>
      </li>
      <li>Caching Data for Request Deduplication</a></li>
      <li>Preloading Data</a></li>
      <li>Pre-rendering Routes</a></li>
      <li>Registering API Endpoints</a>
        <ol>
          <li>Using the file router API</a></li>
          <li>Using application configuration</a></li>
          <li>Using a Middleware</a></li>
          <li>Using the <code>GET</code> function</a></li>
        </ol>
      </li>
      <li>Accessing Server Events</a></li>
      <li>Managing <code>&lt;head&gt;</code> Elements</a></li>
      <li>Setting HTTP Headers and Status Codes</a>
        <ol>
          <li>Setting HTTP Headers</a></li>
          <li>Setting HTTP Status Codes</a></li>
        </ol>
      </li>
      <li>Creating Client-Only Components</a></li>
      <li>Building Echoes: A Quote Management App with
        SolidStart</a>
        <ol>
          <li>Project Setup</a></li>
          <li>Application Structure and Routes</a>
            <ol>
              <li>Route Organization</a></li>
              <li>Protected Routes</a></li>
              <li>Public Routes</a></li>
            </ol>
          </li>
          <li>Application Layout</a></li>
          <li>Styling</a></li>
          <li>Error Handling</a></li>
          <li>Fetching Data</a></li>
          <li>Updating Data</a></li>
        </ol>
      </li>
      <li>Authentication and Authorization</a>
        <ol>
          <li>Notifications and Confirmation Dialogs</a>
            <ol>
              <li>Mounting the Client-Only Layers</a></li>
              <li>Notifications: Decoupled, Event-Driven
                Toasts</a></li>
              <li>Confirmation Dialogs: Explicit Consent for
                Destructive Actions</a></li>
            </ol>
          </li>
        </ol>
      </li>
      <li>Closing Thoughts</a></li>
    </ol>
  </li>
  <li>A1. Setting Development Environment Using Webpack</a>
    <ol>
      <li>Install Dependencies</a></li>
      <li>Configuring Webpack</a></li>
      <li>Configure the Webpack Dev Server</a></li>
      <li>Add TypeScript Support</a></li>
      <li>Add Eslint Support</a></li>
      <li>Create a Basic Application</a></li>
    </ol>
  </li>
  <li>About the Author</a></li>
</ul>