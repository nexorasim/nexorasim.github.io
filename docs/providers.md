# Nexora AI Agent - Provider Configuration Guide

## Overview

This guide provides detailed configuration instructions for each supported AI provider in the Nexora Agent Mode system.

## General Configuration Pattern

All providers follow a consistent configuration pattern in the `.env` file:

```bash
<PROVIDER>_API_KEY=<your_key>
<PROVIDER>_MODEL=<model_name>
<PROVIDER>_ENABLED=<true|false>
```

Additional provider-specific settings may be required.

## OpenAI Configuration

### Obtaining API Key

1. Go to https://platform.openai.com
2. Sign up or log in
3. Navigate to API Keys section
4. Click "Create new secret key"
5. Copy the key (it will only be shown once)

### Configuration

```bash
OPENAI_API_KEY=sk-proj-...
OPENAI_MODEL=gpt-4
OPENAI_ENABLED=true
```

### Available Models

- `gpt-4`: Most capable model, best for complex tasks
- `gpt-4-turbo-preview`: Faster GPT-4 variant
- `gpt-3.5-turbo`: Fast and cost-effective
- `gpt-3.5-turbo-16k`: Extended context window

### Rate Limits and Quotas

**Free Tier:**
- 3 requests per minute
- 20,000 tokens per minute

**Pay-as-you-go:**
- Varies by account tier
- Check https://platform.openai.com/account/limits

### Cost Considerations

- GPT-4: Higher cost per token
- GPT-3.5-turbo: More economical for simple tasks
- Monitor usage at https://platform.openai.com/usage

### Error Codes

- `401`: Invalid API key
- `429`: Rate limit exceeded
- `500`: OpenAI server error
- `503`: Service temporarily unavailable

### Troubleshooting

**Issue: "Invalid API key"**
```bash
# Verify key format (should start with sk-)
echo $OPENAI_API_KEY

# Test with curl
curl https://api.openai.com/v1/models \
  -H "Authorization: Bearer $OPENAI_API_KEY"
```

**Issue: Rate limit errors**
```bash
# Increase timeout and retries
MAX_RETRIES=5
REQUEST_TIMEOUT=60

# Or upgrade account tier
```

## Google Gemini Configuration

### Obtaining API Key

1. Go to https://makersuite.google.com/app/apikey
2. Sign in with Google account
3. Click "Create API Key"
4. Select or create a Google Cloud project
5. Copy the generated key

### Configuration

```bash
GOOGLE_API_KEY=AIza...
GEMINI_MODEL=gemini-pro
GEMINI_ENABLED=true
```

### Available Models

- `gemini-pro`: Text-only generation
- `gemini-pro-vision`: Multimodal (text + images)
- `gemini-ultra`: Most capable (when available)

### Rate Limits and Quotas

**Free Tier:**
- 60 requests per minute
- 32,000 tokens per minute

**Paid Tier:**
- Higher limits based on project
- Check Google Cloud Console for details

### Cost Considerations

- Free tier available for development
- Pay-as-you-go pricing for production
- Check https://ai.google.dev/pricing

### Safety Settings

Gemini includes built-in safety filters that may block certain content:

```python
# Custom safety settings (future enhancement)
generation_config = genai.types.GenerationConfig(
    temperature=0.7,
    max_output_tokens=1000,
)

safety_settings = [
    {"category": "HARM_CATEGORY_HARASSMENT", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
    {"category": "HARM_CATEGORY_HATE_SPEECH", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
]
```

### Error Codes

- `400`: Invalid request (safety filters, invalid input)
- `401`: Invalid API key
- `429`: Quota exceeded
- `500`: Internal server error

### Troubleshooting

**Issue: "API key not valid"**
```bash
# Verify API key is enabled
# Check Google Cloud Console > APIs & Services > Credentials

# Ensure Generative Language API is enabled
# Google Cloud Console > APIs & Services > Enabled APIs
```

**Issue: Safety filter blocks**
```bash
# Review prompt content
# Gemini has stricter safety filters than some providers
# Rephrase prompt or use different provider
```

## xAI Grok Configuration

### Obtaining API Key

1. Contact xAI for API access: https://x.ai
2. Follow their onboarding process
3. Receive API key and endpoint information

**Note:** xAI Grok API access may be limited or require application.

### Configuration

```bash
XAI_API_KEY=xai-...
XAI_ENDPOINT=https://api.x.ai/v1
XAI_MODEL=grok-1
XAI_ENABLED=true
```

### Available Models

- `grok-1`: Primary Grok model
- `grok-beta`: Beta version with latest features
- Additional models as announced by xAI

### Rate Limits and Quotas

**Details depend on xAI account tier:**
- Contact xAI for specific limits
- Monitor usage through xAI dashboard (when available)

### Cost Considerations

- Pricing details available from xAI
- May vary by account type and usage volume

### Error Codes

- `401`: Authentication failed
- `429`: Rate limit exceeded
- `500`: Server error
- `503`: Service unavailable

### Troubleshooting

**Issue: Connection errors**
```bash
# Verify endpoint URL
echo $XAI_ENDPOINT

# Test connectivity
curl -I $XAI_ENDPOINT

# Check xAI status page for outages
```

**Issue: Authentication failed**
```bash
# Verify API key format
# Contact xAI support if issues persist
```

## Generic HTTP Provider Configuration

### Purpose

The Generic HTTP provider allows integration with any AI API that follows standard HTTP/JSON patterns, including:

- Anthropic Claude
- Cohere
- Self-hosted models (Ollama, LocalAI)
- Custom fine-tuned models
- Internal AI services

### Basic Configuration

```bash
GENERIC_API_KEY=your_api_key_here
GENERIC_ENDPOINT=https://api.example.com/v1/completions
GENERIC_ENABLED=true
```

### Request Format Expectations

The generic provider sends POST requests with:

```json
{
  "prompt": "User's prompt text",
  "temperature": 0.7,
  "max_tokens": 1000
}
```

Headers:
```
Authorization: Bearer <GENERIC_API_KEY>
Content-Type: application/json
```

### Response Format Expectations

The provider looks for response text in these fields (in order):
1. `text`
2. `response`
3. `output`

```json
{
  "text": "Generated response text"
}
```

or

```json
{
  "response": "Generated response text"
}
```

### Custom Configuration Examples

#### Anthropic Claude

```bash
GENERIC_API_KEY=sk-ant-...
GENERIC_ENDPOINT=https://api.anthropic.com/v1/messages
GENERIC_ENABLED=true
```

**Note:** Claude has a different API format. Consider creating a dedicated provider for production use.

#### Self-Hosted Ollama

```bash
GENERIC_API_KEY=not_required
GENERIC_ENDPOINT=http://localhost:11434/api/generate
GENERIC_ENABLED=true
```

#### Cohere

```bash
GENERIC_API_KEY=<cohere_api_key>
GENERIC_ENDPOINT=https://api.cohere.ai/v1/generate
GENERIC_ENABLED=true
```

### Advanced Usage

**Custom Headers:**
```python
response = agent.execute(
    prompt="Your prompt",
    provider="generic_http",
    headers={
        "X-Custom-Header": "value",
        "X-Another-Header": "value"
    }
)
```

**Custom Payload:**
```python
response = agent.execute(
    prompt="Your prompt",
    provider="generic_http",
    payload={
        "model": "custom-model",
        "prompt": "Your prompt",
        "custom_param": "value"
    }
)
```

**GET Requests:**
```python
response = agent.execute(
    prompt="Your prompt",
    provider="generic_http",
    method="GET"
)
```

### Troubleshooting

**Issue: "Provider not configured"**
```bash
# Verify endpoint is accessible
curl -I $GENERIC_ENDPOINT

# Test authentication
curl -X POST $GENERIC_ENDPOINT \
  -H "Authorization: Bearer $GENERIC_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"prompt": "test"}'
```

**Issue: "No response text found"**
```bash
# Check response format from your API
# Ensure it includes "text", "response", or "output" field

# Example: test your API directly
curl -X POST $GENERIC_ENDPOINT \
  -H "Authorization: Bearer $GENERIC_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"prompt": "hello"}' | jq .
```

## Multi-Provider Strategy

### Recommended Configuration

**Development:**
```bash
DEFAULT_PROVIDER=openai
FALLBACK_PROVIDERS=google_gemini
OPENAI_ENABLED=true
GEMINI_ENABLED=true
XAI_ENABLED=false
GENERIC_ENABLED=false
```

**Production (High Availability):**
```bash
DEFAULT_PROVIDER=openai
FALLBACK_PROVIDERS=google_gemini,xai_grok
OPENAI_ENABLED=true
GEMINI_ENABLED=true
XAI_ENABLED=true
GENERIC_ENABLED=false
```

**Cost-Optimized:**
```bash
DEFAULT_PROVIDER=google_gemini
FALLBACK_PROVIDERS=openai
OPENAI_MODEL=gpt-3.5-turbo
GEMINI_ENABLED=true
OPENAI_ENABLED=true
```

### Provider Selection Criteria

**Choose OpenAI when:**
- Need highest quality responses
- Working on complex reasoning tasks
- Code generation required
- Cost is not primary concern

**Choose Google Gemini when:**
- Need multimodal capabilities
- Long context understanding required
- Want free tier for development
- Speed is important

**Choose xAI Grok when:**
- Need real-time information
- Working with Twitter/X data
- Want alternative to major providers

**Choose Generic/Custom when:**
- Using self-hosted models
- Have custom fine-tuned models
- Need specific model capabilities
- Cost control is critical

## Configuration Best Practices

### Security

1. **Never commit `.env` files**
   ```bash
   echo ".env" >> .gitignore
   ```

2. **Use environment-specific configs**
   ```bash
   .env.dev     # Development
   .env.staging # Staging
   .env.prod    # Production
   ```

3. **Rotate API keys regularly**
   - Set calendar reminders
   - Update in all environments
   - Test after rotation

4. **Use secrets management in CI/CD**
   - GitHub Secrets
   - AWS Secrets Manager
   - HashiCorp Vault

### Performance

1. **Set appropriate timeouts**
   ```bash
   REQUEST_TIMEOUT=30  # Balance speed and reliability
   ```

2. **Configure retry limits**
   ```bash
   MAX_RETRIES=3  # Prevent excessive retries
   ```

3. **Monitor token usage**
   - Track in metadata
   - Set alerts for high usage
   - Implement rate limiting in application

### Reliability

1. **Enable multiple providers**
   ```bash
   OPENAI_ENABLED=true
   GEMINI_ENABLED=true
   ```

2. **Configure fallback chain**
   ```bash
   FALLBACK_PROVIDERS=google_gemini,xai_grok
   ```

3. **Test all providers regularly**
   ```bash
   nexora-agent test-provider --provider openai
   nexora-agent test-provider --provider google_gemini
   ```

### Cost Management

1. **Use cost-effective models for simple tasks**
   ```bash
   OPENAI_MODEL=gpt-3.5-turbo
   ```

2. **Set token limits**
   ```python
   response = agent.execute(prompt, max_tokens=500)
   ```

3. **Monitor spending**
   - Check provider dashboards
   - Set budget alerts
   - Review usage patterns

## Configuration Validation

### Validation Checklist

- [ ] All enabled providers have valid API keys
- [ ] API keys tested and working
- [ ] Models specified correctly
- [ ] Fallback chain configured
- [ ] Timeout and retry settings appropriate
- [ ] Logging level set correctly
- [ ] Environment-specific configs created
- [ ] Secrets not committed to repository

### Testing Configuration

```bash
# Check provider status
nexora-agent status

# Test each enabled provider
nexora-agent test-provider --provider openai
nexora-agent test-provider --provider google_gemini

# Test fallback chain
# (Temporarily disable default provider to test fallback)
```

## Conclusion

Proper provider configuration is crucial for reliable operation of the Nexora AI Agent Mode system. Follow this guide to configure each provider correctly, implement best practices, and ensure high availability.

For more information:
- Agent Mode: `/docs/agent-mode.md`
- Architecture: `/docs/architecture.md`
- Deployment: `/docs/deployment.md`
