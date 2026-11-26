# Combining Union ( | ) and Intersection ( & ) Types

Union ( | ) and intersection ( & ) types represent the algebraic building blocks of TypeScript's type system. While unions model logical "OR" 
relationships where a value can match one of several shapes, intersections model logical "AND" relationships that merge multiple types into a single 
combined contract.

Combining unions and intersections enables precise domain modeling, particularly when representing state machines, API responses, or shared metadata 
attached to distinct payload variants. For example, every event in an audit logging system might share common tracking metadata—such as a timestamp and 
correlation identifier—while carrying variant-specific payloads depending on whether the event represents a login or a payment. By intersecting a base 
metadata type with a discriminated union of event payloads, you avoid duplicating shared fields across every variant.

```typescript
type AuditMetadata = {
  eventId: string;
  occurredAt: Date;
};

type LoginPayload = {
  kind: "USER_LOGIN";
  ipAddress: string;
};

type PaymentPayload = {
  kind: "PAYMENT_PROCESSED";
  amountCents: number;
};

type AuditEvent = AuditMetadata & (LoginPayload | PaymentPayload);

function logEvent(event: AuditEvent): string {
  if (event.kind === "USER_LOGIN") {
    return `[${event.eventId}] Login from ${event.ipAddress}`;
  }
  return `[${event.eventId}] Paid ${event.amountCents} cents`;
}
```

Here, `AuditEvent` guarantees that eventId and occurredAt are always accessible on any event instance, while checking the kind discriminant safely narrows 
whether `ipAddress` or `amountCents` exists.

Pairing intersections for shared structure with unions for mutually exclusive states produces expressive, maintainable models that eliminate impossible 
runtime states.