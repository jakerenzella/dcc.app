---
draft: false
authors: ["Andrew Taylor", "Alexandra Vassar",  "Jake Renzella", "Hammond Pearce"]
title: "dcc --help: Transforming the Role of the Compiler by Generating Context-Aware Error Explanations with Large Language Models"
year: "2024"
url: "https://dl.acm.org/doi/abs/10.1145/3626252.3630822"
doi: "https://doi.org/10.1145/3626252.3630822"
abstract: "In the challenging field of introductory programming, high enrolments and failure rates drive us to explore tools and systems to enhance student outcomes, especially automated tools that scale to large cohorts. This paper presents and evaluates the dcc --help tool, an integration of a Large Language Model (LLM) into the Debugging C Compiler (DCC) to generate unique, novice-focused explanations tailored to each error. dcc --help prompts an LLM with contextual information of compile- and run-time error occurrences, including the source code, error location and standard compiler error message. The LLM is instructed to generate novice-focused, actionable error explanations and guidance, designed to help students understand and resolve problems without providing solutions. dcc --help was deployed to our CS1 and CS2 courses, with 2,565 students using the tool over 64,000 times in ten weeks. We analysed a subset of these error/explanation pairs to evaluate their properties, including conceptual correctness, relevancy, and overall quality. We found that the LLM-generated explanations were conceptually accurate in 90% of compile-time and 75% of run-time cases, but often disregarded the instruction not to provide solutions in code. Our findings, observations and reflections following deployment indicate that dcc --help provides novel opportunities for scaffolding students' introduction to programming."
booktitle: "Proceedings of the 55th ACM Technical Symposium on Computer Science Education"
---
