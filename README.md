# SolidJS: The Complete Guide

_A comprehensive guide to reactive web development with SolidJS and TypeScript_

This repository is dedicated to tracking and addressing any issues, feedback, or suggestions related to the book. Your insights are invaluable, whether it's to report errors, share thoughts on the book, or suggest ways to improve the content.

Please feel free to open an issue if:

* You’ve found an error in the text or examples.
* You have questions or would like further clarification on any topic.
* You have suggestions on improving the book’s structure, examples, or depth.

Your feedback not only helps improve the book for all readers but also contributes to building a better learning resource for the SolidJS community.

The book is available for purchase:

* https://solid.courses/p/solidjs-the-complete-guide/
* https://leanpub.com/solid-js

## About the Book

Solid may seem simple on the surface, but its internal workings involve complex interactions that can sometimes be tricky to explain.

It is a comprehensive book that aims to teach you the ins and outs of Solid, covering its core principles, the inner workings, and the API. By the end of this book, you will have a thorough understanding of SolidJS to write efficient applications.

The book goes beyond just showing you how to use SolidJS; it explains the reasoning and underlying principles behind the library, helping you understand why certain approaches or features work the way they do. With this deeper comprehension, you’ll be well-equipped to build your own projects confidently.

I did my best to organize the topics in a way not to overwhelm the readers and to enhance progressive learning, with examples that focus on the subject matter without introducing unnecessary complexity.

I would love to hear your feedback on how the book has helped you understand SolidJS better, or any questions you might have!

Thank you for your interest and contributions.

## Available Formats:

* PDF
* Epub
* Azw3 (on solid.courses only)

## Table of Contents

<ol style="list-style:none;margin:0;padding:0">
    <li>Chapter 01: Introduction
        <ol>
            <li>The Solid Version Used</li>
            <li>Contact and Feedback</li>
            <li>Requirements</li>
            <li>Trying Solid via Online Playground</li>
            <li>Creating a Project From a Template</li>
            <li>Note For React Developers</li>
        </ol></li>
    <li>Chapter 02: Setting Up a Development Environment</li>
    <li>Chapter 03: On SolidJS
        <ol>
            <li>The Problem Solid Solves</li>
            <li>How Solid Works?
                <ol>
                    <li>Reactive Data</li>
                    <li>Composable UI</li>
                </ol></li>
            <li>The Advantages of Solid Over Its Alternatives</li>
        </ol></li>
    <li>Chapter 04: How Solid’s Reactive System Works
        <ol>
            <li>Observer Pattern</li>
            <li>The Essence of Reactive Core</li>
            <li>The Uses of Computations</li>
        </ol></li>
    <li>Chapter 05: Tracking State With Signals
        <ol>
            <li>Overwriting the comparison logic</li>
            <li>Updating Signals</li>
            <li>Transforming Signals</li>
            <li>Destructuring Signals</li>
            <li>Batching Updates</li>
        </ol></li>
    <li>Chapter 06: Running Side-Effects with Effects
        <ol>
            <li>Effects Can Be Nested</li>
            <li>Explicit Tracking</li>
            <li>Opting Out of Tracking</li>
            <li>Handling External Dependencies</li>
        </ol></li>
    <li>Chapter 07: Caching Values with Memos</li>
    <li>Chapter 08: Rules of JSX
        <ol>
            <li>Elements Should Be Closed</li>
            <li>JSX Elements Can Be Nested</li>
            <li>Expressions Can Be Used Inside JSX Elements</li>
            <li>Elements Can Have Attributes</li>
            <li>Missing Attribute Values Default to&nbsp;<code>true</code></li>
            <li>Comments</li>
            <li>Whitespaces Are Trimmed</li>
        </ol></li>
    <li>Chapter 09: Composing User Interfaces
        <ol>
            <li>Components Should Return A Single Root Element</li>
            <li>Components Accept Data Through Their&nbsp;<code>props</code></li>
            <li>Adding Static Types To Components</li>
            <li>Components Can Have Children</li>
            <li>How Components Are Rendered</li>
            <li>Solid runs fine-grained updates</li>
            <li>Conditional Rendering</li>
            <li>Reactive&nbsp;<code>props</code></li>
            <li>Props should be treated as&nbsp;<code>read-only</code></li>
            <li>Destructuring Props Changes The Rendering Order</li>
            <li>Best Practices</li>
        </ol></li>
    <li>Chapter 10: Working With Props
        <ol>
            <li>Passing Data From Parent To Child
                <ol>
                    <li>Providing Controlled Access To Parent’s Data</li>
                </ol></li>
            <li>Passing Data From Child To Parent</li>
            <li>Sharing State Between Children</li>
            <li>Destructuring And Spreading Props</li>
            <li>Forwarding Multiple Props At Once</li>
            <li>Validating Props</li>
        </ol></li>
    <li>Chapter 11: Sharing Data Through the Context API
        <ol>
            <li>How Context API Works</li>
            <li>Best Practices</li>
        </ol></li>
    <li>Chapter 12: Component Lifecycle
        <ol>
            <li><code>onMount</code></li>
            <li><code>onCleanup</code></li>
            <li>Best Practices</li>
        </ol></li>
    <li>Chapter 13: Accessing DOM Nodes With&nbsp;<code>ref</code>
        <ol>
            <li>Forwarding Refs</li>
            <li>Using refs with external libraries</li>
            <li>Best Practices</li>
        </ol></li>
    <li>Chapter 14: Working with Computations
        <ol>
            <li><code>createComputed</code></li>
            <li><code>createRenderEffect</code></li>
            <li><code>createEffect</code></li>
            <li><code>createMemo</code></li>
            <li><code>createDeferred</code></li>
            <li><code>createReaction</code></li>
        </ol></li>
    <li>Chapter 15: Handling Errors
        <ol>
            <li><code>ErrorBoundary</code></li>
            <li><code>catchError</code></li>
            <li>Handling Asynchronous Errors</li>
            <li>Handling Event Handling Errors</li>
        </ol></li>
    <li>Chapter 16: Working with Owners
        <ol>
            <li>Running functions with a given owner</li>
            <li>Running effects in asynchronous context</li>
        </ol></li>
    <li>Chapter 17: Styling Elements
        <ol>
            <li>Using Inline Styles</li>
            <li>Applying Style Definitions</li>
            <li>Applying classes based on a condition</li>
            <li>Using The Imperative API</li>
        </ol></li>
    <li>Chapter 18: Reactive Utilities
        <ol>
            <li><code>batch</code></li>
            <li><code>untrack</code></li>
            <li><code>on</code></li>
            <li><code>createRoot</code></li>
            <li><code>mergeProps</code></li>
            <li><code>splitProps</code></li>
            <li><code>mapArray</code>&nbsp;and&nbsp;<code>indexArray</code></li>
            <li><code>observable</code></li>
            <li><code>from</code></li>
            <li><code>startTransition</code>&nbsp;and&nbsp;<code>useTransition</code></li>
        </ol></li>
    <li>Chapter 19: A Better Conditional Rendering
        <ol>
            <li><code>Switch</code>&nbsp;and&nbsp;<code>Match</code></li>
        </ol></li>
    <li>Chapter 20: Working with Lists
        <ol>
            <li><code>For</code></li>
            <li><code>mapArray</code></li>
            <li>Index</li>
            <li><code>indexArray</code></li>
            <li>Selecting Items with Selectors</li>
        </ol></li>
    <li>Chapter 21: Rendering Components Outside Component Hierarchy</li>
    <li>Chapter 22: Managing Complex States with Stores
        <ol>
            <li>Accessing Data</li>
            <li>Updating Stores</li>
            <li>Limitations Related to Reactivity</li>
            <li>Store Utilities
                <ol>
                    <li><code>produce</code></li>
                    <li><code>reconcile</code></li>
                    <li><code>unwrap</code></li>
                    <li><code>createMutable</code></li>
                </ol></li>
        </ol></li>
    <li>Chapter 23: Abstracting Behavior With Custom Directives
        <ol>
            <li>Extending JSX Type With Custom Directives</li>
            <li>Using Imported Directives</li>
        </ol></li>
    <li>Chapter 24: Working with Asynchronous Data
        <ol>
            <li>Decoupling Fetching From Rendering</li>
        </ol></li>
    <li>Chapter 25: Using Resource API for Data Fetching
        <ol>
            <li>Info Object</li>
            <li>Resource Actions</li>
            <li>Handling Errors</li>
        </ol></li>
    <li>Chapter 26: Managing Loading States with Suspense</li>
    <li>Chapter 27: Achieving Better Consistency with Transitions</li>
    <li>Chapter 28: Coordinating Loading States</li>
    <li>Chapter 29: Code Splitting and Lazy Loading</li>
    <li>Chapter 30: Handling Events
        <ol>
            <li>Using the&nbsp;<code>on</code>&nbsp;namespace</li>
            <li>Using the&nbsp;<code>on:</code>&nbsp;Namespace</li>
            <li>Using the&nbsp;<code>oncapture:</code>&nbsp;Namespace</li>
            <li>Using Custom Properties</li>
            <li>Using Refs</li>
            <li>Using Custom Directives</li>
            <li>Passing Data to the Event Handlers</li>
        </ol></li>
    <li>Chapter 31: Dynamically Rendering Components</li>
    <li>Chapter 32: Server Side Rendering
        <ol>
            <li>Targeting The Server Context</li>
            <li>Targeting the Development Build</li>
            <li>Rendering A Solid App</li>
        </ol></li>
    <li>Chapter 33: Solid Without JSX
        <ol>
            <li>Solid with Tagged Template Literals</li>
            <li>Solid with Hyperscript</li>
            <li>Drawbacks</li>
        </ol></li>
    <li>A1: Setting Development Environment Using Webpack</li>
    <li>Index</li>
    <li>About the Author</li>
</ol>