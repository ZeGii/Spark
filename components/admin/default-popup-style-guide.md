
# Default Popup Style Guide

This document defines the standard styling pattern for modal popups across the admin interface, based on the Login/Sign up modal design.

## Core Styling Classes

### Modal Container
```tsx
className="sm:max-w-lg bg-white border border-gray-100 shadow-xl rounded-xl"
```
- **Background**: `bg-white` - Clean white background
- **Border**: `border border-gray-100` - Subtle light gray border
- **Shadow**: `shadow-xl` - Elevated shadow for depth
- **Corners**: `rounded-xl` - Rounded corners for modern look

### Modal Sizing & Scrolling
```tsx
className="max-h-[90vh] overflow-y-auto"
```
- **Max Height**: `max-h-[90vh]` - Maximum 90% of viewport height
- **Scrolling**: `overflow-y-auto` - Vertical scrolling when content overflows

### Typography

#### Title/Heading
```tsx
className="text-gradient-primary"
```
- **Primary titles** use gradient text styling

#### Body Text
```tsx
className="text-gray-600"
```
- **Descriptions** and general body text use medium gray

#### Labels
```tsx
className="text-gray-900"
```
- **Form labels** and important text use dark gray

### Information Boxes
```tsx
className="bg-gray-50 border border-gray-100"
```
- **Background**: `bg-gray-50` - Light gray background
- **Border**: `border border-gray-100` - Subtle border for definition

### Error Messages
```tsx
className="bg-destructive/10 border border-destructive/20 text-destructive"
```
- **Background**: `bg-destructive/10` - Light red background with opacity
- **Border**: `border border-destructive/20` - Red border with opacity
- **Text**: `text-destructive` - Red text color

### Buttons
```tsx
variant="form-primary" size="form"
```
- **Primary buttons** use `form-primary` variant
- **Size** should be `form` for consistency

### Input Icons
```tsx
className="text-muted-foreground"
```
- **Icons** within input fields use muted foreground color

## Implementation Example

```tsx
<Dialog open={isOpen} onOpenChange={onClose}>
  <DialogContent className="sm:max-w-4xl bg-white border border-gray-100 shadow-xl rounded-xl max-h-[90vh] overflow-y-auto">
    <DialogHeader>
      <DialogTitle className="text-2xl font-bold text-gradient-primary">
        Modal Title
      </DialogTitle>
      <p className="text-gray-600">
        Modal description text
      </p>
    </DialogHeader>

    <div className="space-y-6">
      {/* Error Message */}
      {error && (
        <div className="bg-destructive/10 border border-destructive/20 text-destructive px-4 py-3 rounded-md text-sm">
          {error}
        </div>
      )}

      {/* Information Box */}
      <div className="bg-gray-50 border border-gray-100 rounded-lg p-4">
        <Label className="text-gray-900 font-medium">Label Text</Label>
        <p className="text-gray-600 mt-2">Content text</p>
      </div>

      {/* Actions */}
      <Button variant="form-primary" size="form">
        Primary Action
      </Button>
    </div>
  </DialogContent>
</Dialog>
```

## Usage Guidelines

1. **Consistency**: Always use these exact classes for consistent styling
2. **Responsiveness**: Include responsive sizing (`sm:max-w-lg`, `sm:max-w-4xl`, etc.)
3. **Scrolling**: Always include `max-h-[90vh] overflow-y-auto` for proper viewport handling
4. **Spacing**: Use consistent spacing patterns (`space-y-6`, `space-y-4`)
5. **Accessibility**: Maintain proper color contrast and keyboard navigation

## Components Using This Style

- Login/Sign up Modal (`auth-modal.tsx`)
- Propose Topic Modal (`propose-topic-modal.tsx`) 
- Review Topic Proposal Modal (`review-topic-proposal-modal.tsx`)

## Future Implementation

When creating new modal components, copy the core styling from this guide to maintain visual consistency across the admin interface.
