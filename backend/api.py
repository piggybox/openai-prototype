from fastapi import FastAPI
from ai import generate_branding_snippet, generate_branding_keywords

app = FastAPI()

@app.get("/snippet")
async def generate_snippet(prompt: str):
    snippet = generate_branding_snippet(prompt)
    return {"snippet": snippet}


@app.get("/keywords")
async def generate_keywords(prompt: str):
    keywords = list(generate_branding_keywords(prompt))
    return {"keywords": keywords}