<template>
  <div class="eid-validator">
    <input v-model="eidInput" placeholder="Enter EID" />
    <button @click="validateEID">Validate</button>
    <div v-if="validationResult">
      <p>Status: {{ validationResult.valid ? 'Valid' : 'Invalid' }}</p>
      <p v-if="!validationResult.valid">Error: {{ validationResult.error }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      eidInput: '',
      validationResult: null
    }
  },
  methods: {
    async validateEID() {
      const response = await fetch('/api/compliance/validate-eid', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ eid: this.eidInput })
      })
      this.validationResult = await response.json()
    }
  }
}
</script>

<style scoped>
.eid-validator {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 20px 0;
}

input {
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
  width: 300px;
}

button {
  padding: 8px 16px;
  background: #1976d2;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>