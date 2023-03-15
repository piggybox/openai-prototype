import os
from typing import List
import openai
import argparse
import re


MAX_INPUT_LENGTH = 32


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--input", "-i", type=str, required=True)
    args = parser.parse_args()
    user_input = args.input

    print(f"User input: {user_input}\n")
    if validate_length(user_input):
        generate_branding_snippet(user_input)
        generate_keywords(user_input)
    else:
        raise ValueError(
            f"Input length is too long. Must be under {MAX_INPUT_LENGTH}. Submitted input is {user_input}"
        )


def validate_length(prompt: str) -> bool:
    return len(prompt) <= MAX_INPUT_LENGTH


def call_openai_api(prompt: str) -> str:
    openai.api_key = os.getenv("OPENAI_API_KEY")
    response = openai.Completion.create(
        model="davinci-instruct-beta-v3", prompt=prompt, temperature=0.6,
        max_tokens=MAX_INPUT_LENGTH
    )

    return response.choices[0].text


def generate_keywords(prompt: str) -> List[str]:
    enriched_prompt = f"Generate related branding keywords for {prompt}: "
    keywords_text: str = call_openai_api(enriched_prompt)

    # Strip whitespace.
    keywords_text = keywords_text.strip()
    keywords_array = re.split(",|\n|;|-", keywords_text)
    keywords_array = [k.lower().strip() for k in keywords_array]
    keywords_array = [k for k in keywords_array if len(k) > 0]

    print(f"Keywords: {keywords_array}")
    return keywords_array


def generate_branding_snippet(prompt: str) -> str:
    enriched_prompt = f"Generate upbeat branding snippet for {prompt}: "
    branding_text: str = call_openai_api(enriched_prompt)

    # Strip whitespace.
    branding_text = branding_text.strip()

    # Add ... to truncated statements.
    last_char = branding_text[-1]
    if last_char not in {".", "!", "?"}:
        branding_text += "..."

    print(f"Snippet: {branding_text}\n")
    return branding_text


if __name__ == "__main__":
    main()
